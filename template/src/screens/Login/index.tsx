import React from 'react';
import {Text, Button} from 'react-native';

const Login = ({navigation}) => (
  <>
    <Text>Login</Text>
    <Button onPress={() => navigation.navigate('First')} title="Go" />
  </>
);

export default Login;
