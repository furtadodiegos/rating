import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import type { FC, PropsWithChildren } from 'react';

import styles from './screen.styles';

interface AppScreenProps {
  testid?: string;
}

const AppScreen: FC<PropsWithChildren<AppScreenProps>> = ({ children, testid = 'screen' }) => {
  return (
    <SafeAreaView style={styles.safearea} testID={`app.screen.${testid}`}>
      <StatusBar barStyle="light-content" />

      <View style={styles.content} testID="app.screen.content">
        {children}
      </View>
    </SafeAreaView>
  );
};

export default AppScreen;
