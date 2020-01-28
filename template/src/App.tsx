import React from 'react';
import {SafeAreaView} from 'react-native';
import {ENV_TEST} from 'react-native-dotenv';

import AppNavigator from 'navigation';

const App = () => {
  console.log(ENV_TEST);

  return (
    <SafeAreaView>
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;
