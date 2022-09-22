import moment from 'moment';
import React, { createContext, createElement, useCallback, useContext, useEffect, useMemo, useReducer } from 'react';
import { Linking, Platform } from 'react-native';
import Toast from 'react-native-toast-message';
import type { AxiosError, Method } from 'axios';
import type { FC, PropsWithChildren } from 'react';

import { RatingControl } from '../components/rating';
import { axios } from '../services';
import { useActions } from './actions';
import { useModal } from './modal';
import type { ControlActionTypes, ControlProps, ControlStateProps } from '../types';

export type Action = { type: ControlActionTypes; payload?: any };

const controlReducer = (state: ControlProps, { type, payload }: Action): ControlProps => {
  switch (type) {
    case 'PATCH_CONTROL_START':
    case 'GET_CONTROL_START': {
      return { ...state, isLoading: true, error: undefined };
    }
    case 'PATCH_CONTROL_ERROR':
    case 'GET_CONTROL_ERROR': {
      return { ...state, isLoading: false, error: payload };
    }
    case 'PATCH_CONTROL':
    case 'GET_CONTROL': {
      return { ...state, ...payload, isLoading: false, error: undefined };
    }
    default:
      return state;
  }
};

const ControlContext = createContext({} as ControlProps);

export interface ReducerAction {
  action: ControlActionTypes;
  method: Method;
  url: string;
  data?: any;
}

const ControlProvider: FC<PropsWithChildren> = ({ children }) => {
  const [controlState, dispatch] = useReducer(controlReducer, {
    isLoading: false,
    error: undefined,
  });

  const { action: currentAction, setAction } = useActions();
  const { setContent, content } = useModal();

  const apiCall = useCallback(async ({ action, ...props }: ReducerAction) => {
    try {
      dispatch({ type: `${action}_START` as ControlActionTypes });

      const { data } = await axios({ ...props });

      dispatch({ type: action, payload: data });
    } catch (e) {
      const error = e as AxiosError;

      dispatch({ type: `${action}_ERROR` as ControlActionTypes, payload: error.message });
    }
  }, []);

  const value = useMemo(() => ({ ...controlState }), [controlState]);

  useEffect(() => {
    if (!controlState?.id) apiCall({ action: 'GET_CONTROL', method: 'GET', url: '/control' });
  }, [controlState?.id, apiCall]);

  useEffect(() => {
    if (
      currentAction &&
      (controlState?.displayed || 0) <= 3 &&
      (!controlState?.updatedAt || moment().diff(moment(controlState.updatedAt), 'days') > 0)
    )
      setContent(
        createElement(RatingControl, {
          onAction: (data: ControlStateProps) =>
            apiCall({ action: 'PATCH_CONTROL', method: 'PUT', url: '/control', data }),
          displayed: (controlState?.displayed || 0) + 1,
          action: currentAction,
        }),
      );
  }, [currentAction, setContent, controlState, apiCall]);

  useEffect(() => {
    if (!content && currentAction) setAction(undefined);
  }, [content, currentAction, setAction]);

  useEffect(() => {
    setContent(undefined);
  }, [controlState, setContent]);

  useEffect(() => {
    if (controlState.error)
      Toast.show({
        type: 'error',
        text1: controlState.error,
      });

    if (moment().diff(moment(controlState.updatedAt), 'days') === 0 && controlState.value) {
      if (controlState.value >= 4)
        Platform.select({
          ios: Linking.openURL('itms-apps://itunes.apple.com/us/app/id1453817491?mt=8'),
          default: Linking.openURL('market://details?id=com.racketpal'),
        });
      else
        Toast.show({
          type: 'success',
          text1: 'Thanks for rating us',
        });
    }
  }, [controlState]);

  return <ControlContext.Provider value={value}>{children}</ControlContext.Provider>;
};

const useControl = () => useContext(ControlContext);

export { ControlProvider, useControl };
