import React from 'react';
import {Text, Button} from 'react-native';
import {NavigationSwitchScreenComponent} from 'react-navigation';

const Login: NavigationSwitchScreenComponent = ({navigation}) => (
  <>
    <Text>Login</Text>
    <Button onPress={() => navigation.navigate('First')} title="Go" />
  </>
);

export default Login;
