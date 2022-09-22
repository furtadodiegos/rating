import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { FC } from 'react';

import { ControlScreen, TestScreen } from '../screens';

export type RootStackParamList = {
  ControlScreen: undefined;
  TestScreen: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();

const AppNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="ControlScreen">
        <Screen name="ControlScreen" component={ControlScreen} />
        <Screen name="TestScreen" component={TestScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
