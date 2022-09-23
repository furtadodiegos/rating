import React from 'react';
import { Text } from 'react-native';
import type { FC } from 'react';

import { AppButton, AppList, AppScreen } from '../../components';
import { TestProvider, useActions, useTest } from '../../contexts';

const TestScreen: FC = () => {
  const { actions, setAction } = useActions();
  const { isLoading } = useTest();

  return (
    <AppScreen testid="test">
      <AppList
        isLoading={isLoading}
        data={actions}
        renderItem={({ item }) => (
          <AppButton testID="screen.test.list.item.button" onPress={() => setAction(item)}>
            <Text>{item.toUpperCase()}</Text>
          </AppButton>
        )}
      />
    </AppScreen>
  );
};

const WithTestProvider: FC = () => (
  <TestProvider>
    <TestScreen />
  </TestProvider>
);

export default WithTestProvider;
