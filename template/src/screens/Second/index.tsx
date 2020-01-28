import React from 'react';
import {Text, Button} from 'react-native';
import {NavigationSwitchScreenComponent} from 'react-navigation';

const Second: NavigationSwitchScreenComponent = ({navigation}) => (
  <>
    <Text>Second</Text>
    <Button onPress={() => navigation.navigate('First')} title="Go" />
  </>
);

export default Second;
