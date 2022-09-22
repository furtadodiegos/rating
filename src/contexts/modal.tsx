import React, { createContext, useContext, useMemo, useState } from 'react';
import type { Dispatch, FC, JSXElementConstructor, PropsWithChildren, ReactElement, SetStateAction } from 'react';

interface ModalProps {
  content: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  setContent: Dispatch<SetStateAction<ReactElement<any, string | JSXElementConstructor<any>> | undefined>>;
}

const ModalContext = createContext({} as ModalProps);

const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [content, setContent] = useState<ReactElement | undefined>();

  const value = useMemo(() => ({ content, setContent }), [content, setContent]);

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

const useModal = () => useContext(ModalContext);

export { ModalProvider, useModal };
