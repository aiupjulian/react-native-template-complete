import React from 'react';
import {Text, Button} from 'react-native';

const First = ({navigation}) => (
  <>
    <Text>First</Text>
    <Button onPress={() => navigation.navigate('Second')} title="Go" />
  </>
);

export default First;
