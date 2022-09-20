import React from 'react';
import { Text, View } from 'react-native';

import { AppScreen } from './components';

const App = () => {
  return (
    <AppScreen testid="home">
      <View>
        <Text>Hello</Text>
      </View>
    </AppScreen>
  );
};

export default App;
