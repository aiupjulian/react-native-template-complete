import React from 'react';
import {Text, Button} from 'react-native';

const Second = ({navigation}) => (
  <>
    <Text>Second</Text>
    <Button onPress={() => navigation.navigate('First')} title="Go" />
  </>
);

export default Second;
