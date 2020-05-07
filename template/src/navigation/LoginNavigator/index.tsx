import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreen} from 'screens';
import {LOGIN} from 'constants/screens';

const {Navigator, Screen} = createStackNavigator();

const LoginNavigator = () => (
  <Navigator
    initialRouteName={LOGIN}
    screenOptions={{
      headerShown: false,
    }}>
    <Screen name={LOGIN} component={LoginScreen} />
  </Navigator>
);

export default LoginNavigator;
