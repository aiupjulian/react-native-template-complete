import React, {FunctionComponent} from 'react';
import {Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Second: FunctionComponent = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text>Second</Text>
      <Button onPress={() => navigation.navigate('First')} title="Go" />
    </>
  );
};

export default Second;
