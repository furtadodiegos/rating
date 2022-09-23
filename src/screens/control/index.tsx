import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import type { FC } from 'react';

import { AppButton, AppList, AppScreen } from '../../components';
import { ControlProvider, useActions, useControl } from '../../contexts';
import type { NavigationProp } from '../../navigation';

const ControlScreen: FC = () => {
  const { actions, setAction } = useActions();
  const { isLoading } = useControl();

  const { navigate } = useNavigation<NavigationProp>();

  return (
    <AppScreen testid="control">
      <AppButton onPress={() => navigate('TestScreen')}>
        <Text>Test Screen</Text>
      </AppButton>

      <AppList
        isLoading={isLoading}
        data={actions}
        renderItem={({ item }) => (
          <AppButton testID="screen.control.list.item.button" onPress={() => setAction(item)}>
            <Text>{item.toUpperCase()}</Text>
          </AppButton>
        )}
      />
    </AppScreen>
  );
};

const WithControlProvider: FC = () => (
  <ControlProvider>
    <ControlScreen />
  </ControlProvider>
);

export default WithControlProvider;
