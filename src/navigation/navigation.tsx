import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { FC } from 'react';

import { ControlScreen, TestScreen } from '../screens';
import SettingsStack from './settings';
import type { SettingsStackProps } from './settings';

type NestedNavigatorParams<ParamList> = {
  [K in keyof ParamList]: undefined extends ParamList[K]
    ? { screen: K; params?: ParamList[K] }
    : { screen: K; params: ParamList[K] };
}[keyof ParamList];

export type RootStackParamList = {
  ControlScreen: undefined;
  TestScreen: undefined;
  SettingsStack: NestedNavigatorParams<SettingsStackProps>;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();

const AppNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="ControlScreen">
        <Screen name="ControlScreen" component={ControlScreen} />
        <Screen name="TestScreen" component={TestScreen} />
        <Screen name="SettingsStack" component={SettingsStack} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
