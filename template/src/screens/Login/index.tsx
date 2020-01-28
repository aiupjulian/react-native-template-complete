import React from 'react';
import {Button} from 'react-native';
import {NavigationSwitchScreenComponent} from 'react-navigation';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  font-size: 40px;
  color: red;
  background-color: blue;
`;

const Login: NavigationSwitchScreenComponent = ({navigation}) => (
  <>
    <StyledText>Login</StyledText>
    <Button onPress={() => navigation.navigate('First')} title="Go" />
  </>
);

export default Login;
