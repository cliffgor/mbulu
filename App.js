import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import Home from './src/screens/Home/index';
import React from 'react';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <Home />
    </SafeAreaView>
  );
};

export default App;
