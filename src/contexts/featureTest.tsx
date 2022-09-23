import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { createContext, createElement, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import Toast from 'react-native-toast-message';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import type { FC, PropsWithChildren } from 'react';

import { RatingTestProps } from '../components/rating';
import { axios } from '../services';
import { goToStore } from '../utils';
import { useActions } from './actions';
import { useModal } from './modal';
import type { NavigationProp } from '../navigation';
import type { Test } from '../types';

interface TestProps extends Partial<Test> {
  isLoading: boolean;
}

const TestContext = createContext({} as TestProps);

const TestProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [canDisplay, setCanDisplay] = useState(false);
  const [testState, setTestState] = useState<Test>();

  const { action, setAction } = useActions();
  const { setContent, content } = useModal();

  const { navigate } = useNavigation<NavigationProp>();

  const apiCall = useCallback(async (props: AxiosRequestConfig) => {
    try {
      setIsLoading(true);

      const { data } = await axios({ ...props, url: '/test' });

      setTestState(data);
    } catch (e) {
      const error = e as AxiosError;

      Toast.show({ type: 'error', text1: error.message });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const debounce = useCallback(() => {
    let interval: any;

    clearTimeout(interval);

    interval = setTimeout(() => {
      interval = null;

      setContent(
        createElement(RatingTestProps, {
          onSubmit: (completedWith: Test['completedWith']) => apiCall({ method: 'PATCH', data: { completedWith } }),
        }),
      );
    }, 10000);
  }, [setContent, apiCall]);

  const value = useMemo(() => ({ ...testState, isLoading }), [testState, isLoading]);

  useEffect(() => {
    if (!testState) apiCall({ method: 'GET' });
  }, [apiCall, testState]);

  useEffect(() => {
    if (action && canDisplay) debounce();
  }, [action, debounce, canDisplay]);

  useEffect(() => {
    setContent(undefined);
  }, [setContent, action, canDisplay]);

  useEffect(() => {
    if (!content && action) setAction(undefined);
  }, [content, action, setAction]);

  useEffect(() => {
    if (testState && (testState?.completedWith || 'CLOSE') === 'CLOSE') {
      // Does the user have more than one month on the platform?
      if (moment().diff(moment(testState?.createdAt), 'months') > 0) {
        // Have more than one month since the ratingModal was displayed?
        if (moment().diff(moment(testState?.updatedAt), 'months') > 0) setCanDisplay(true);

        // Have more than one week since the ratingModal was displayed?
      } else if (!testState?.updatedAt || moment().diff(moment(testState?.updatedAt), 'weeks') > 0) {
        setCanDisplay(true);
      }
    }
  }, [testState]);

  useEffect(() => {
    if (testState?.completedWith && canDisplay) {
      if (testState?.completedWith === 'RATE') goToStore();

      if (testState.completedWith === 'FEEDBACK') navigate('SettingsStack', { screen: 'ContactUsScreen' });

      setCanDisplay(false);
    }
  }, [testState, canDisplay, navigate]);

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
};

const useTest = () => useContext(TestContext);

export { TestProvider, useTest };
