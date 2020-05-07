import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginNavigator from './LoginNavigator';
import HomeNavigator from './HomeNavigator';
import {HOME, LOGIN} from 'constants/navigators';

const {Navigator, Screen} = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Navigator
      initialRouteName={LOGIN}
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={LOGIN} component={LoginNavigator} />
      <Screen name={HOME} component={HomeNavigator} />
    </Navigator>
  </NavigationContainer>
);

export default AppNavigator;
