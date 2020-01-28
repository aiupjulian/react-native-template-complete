import React from 'react';
import {Text, Button} from 'react-native';
import {NavigationSwitchScreenComponent} from 'react-navigation';

const First: NavigationSwitchScreenComponent = ({navigation}) => (
  <>
    <Text>First</Text>
    <Button onPress={() => navigation.navigate('Second')} title="Go" />
  </>
);

export default First;
