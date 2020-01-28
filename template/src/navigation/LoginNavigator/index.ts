import {createSwitchNavigator} from 'react-navigation';
import {LoginScreen} from 'screens';

export default createSwitchNavigator(
  {
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login',
  },
);
