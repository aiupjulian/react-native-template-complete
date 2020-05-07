import React, {FunctionComponent} from 'react';
import {Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const First: FunctionComponent = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text>First</Text>
      <Button onPress={() => navigation.navigate('Second')} title="Go" />
    </>
  );
};

export default First;
