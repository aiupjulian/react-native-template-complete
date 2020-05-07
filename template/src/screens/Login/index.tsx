import React, { FunctionComponent } from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {HOME} from 'constants/navigators';

const StyledText = styled.Text`
  font-size: 40px;
  color: red;
  background-color: blue;
`;

const Login: FunctionComponent = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <StyledText>Login</StyledText>
      <Button onPress={() => navigation.navigate(HOME)} title="Go" />
    </SafeAreaView>
  );
};

export default Login;
