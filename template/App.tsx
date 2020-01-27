import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {ENV_TEST} from 'react-native-dotenv';

declare var global: {HermesInternal: null | {}};

const First = ({navigation}) => (
  <>
    <Text>First {ENV_TEST}</Text>
    <Button onPress={() => navigation.navigate('second')} title="Go" />
  </>
);
const Second = ({navigation}) => (
  <>
    <Text>Second</Text>
    <Button onPress={() => navigation.navigate('first')} title="Go" />
  </>
);

const Switch = createSwitchNavigator({
  first: {
    screen: First,
  },
  second: {
    screen: Second,
  },
});
const AppContainer = createAppContainer(Switch);

const App = () => {
  return (
    <SafeAreaView>
      <AppContainer />
    </SafeAreaView>
  );
};

export default App;
