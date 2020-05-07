import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ENV_TEST} from 'react-native-dotenv';

import AppNavigator from 'navigation';

const App = () => {
  console.log(ENV_TEST);

  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;
