import {createSwitchNavigator} from 'react-navigation';
import {LoginScreen} from 'screens';
import {LOGIN} from 'constants/screens';

export default createSwitchNavigator(
  {
    [LOGIN]: LoginScreen,
  },
  {
    initialRouteName: LOGIN,
  },
);
