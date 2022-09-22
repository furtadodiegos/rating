import React from 'react';
import Toast from 'react-native-toast-message';
import type { FC, PropsWithChildren } from 'react';

import { AppModal } from './components';
import { ActionsProvider, ModalProvider } from './contexts';
import { AppNavigation } from './navigation';

export const AppProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ActionsProvider>
      <ModalProvider>{children}</ModalProvider>
    </ActionsProvider>
  );
};

const App = () => {
  return (
    <AppProviders>
      <AppNavigation />

      <Toast />
      <AppModal />
    </AppProviders>
  );
};

export default App;
