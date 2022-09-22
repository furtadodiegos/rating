import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';

export type ActionProps = 'creating' | 'joining' | 'inviting' | 'accepting';

interface ActionsProps {
  action?: ActionProps;
  actions: ActionProps[];
  setAction: Dispatch<SetStateAction<ActionProps | undefined>>;
}

const ActionsContext = createContext({} as ActionsProps);

const ActionsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [action, setAction] = useState<ActionProps | undefined>();
  const [actions] = useState<ActionProps[]>(['creating', 'joining', 'inviting', 'accepting']);

  const value = useMemo(() => ({ action, setAction, actions }), [action, actions]);

  useEffect(() => {
    return () => {
      console.log('>>>>>> LEFT ACTIONS');
      setAction(undefined);
    };
  }, []);

  return <ActionsContext.Provider value={value}>{children}</ActionsContext.Provider>;
};

const useActions = () => useContext(ActionsContext);

export { ActionsProvider, useActions };
