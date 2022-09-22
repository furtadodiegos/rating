import React from 'react';
import { Text } from 'react-native';
import type { FC, PropsWithChildren } from 'react';

import { AppButton, AppList, AppScreen } from '../../components';
import { ControlProvider, useActions, useControl } from '../../contexts';

const ControlScreen: FC = () => {
  const { actions, setAction } = useActions();
  const { isLoading } = useControl();

  return (
    <AppScreen testid="control">
      <AppList
        isLoading={isLoading}
        data={actions}
        renderItem={({ item }) => (
          <AppButton onPress={() => setAction(item)}>
            <Text>{item.toUpperCase()}</Text>
          </AppButton>
        )}
      />
    </AppScreen>
  );
};

const WithProvider: FC<PropsWithChildren> = () => (
  <ControlProvider>
    <ControlScreen />
  </ControlProvider>
);

export default WithProvider;
