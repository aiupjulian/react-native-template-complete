import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {FirstScreen, SecondScreen} from 'screens';
import {FIRST, SECOND} from 'constants/screens';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => (
  <Navigator
    initialRouteName={FIRST}
    screenOptions={{
      headerShown: false,
    }}>
    <Screen name={FIRST} component={FirstScreen} />
    <Screen name={SECOND} component={SecondScreen} />
  </Navigator>
);

export default HomeNavigator;