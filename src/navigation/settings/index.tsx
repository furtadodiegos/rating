import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import type { FC } from 'react';

import { ContactUsScreen } from '../../screens';

export type SettingsStackProps = {
  ContactUsScreen: undefined;
};

const { Screen, Navigator } = createNativeStackNavigator();

const SettingsStack: FC = () => {
  return (
    <Navigator initialRouteName="ContactUsScreen" screenOptions={{ headerShown: false }}>
      <Screen name="ContactUsScreen" component={ContactUsScreen} />
    </Navigator>
  );
};

export default SettingsStack;
