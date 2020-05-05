import { createStackNavigator } from '@react-navigation/stack';

import {LoginScreen} from 'screens';
import {LOGIN} from 'constants/screens';

const {Navigator, Screen} = createStackNavigator();

const LoginNavigator = () => (
  <Navigator initialRouteName={LOGIN}>
    <Screen
      name={LOGIN}
      component={LoginScreen}
    />
  </Navigator>
);

export default LoginNavigator;