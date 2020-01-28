import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import LoginNavigator from './LoginNavigator';
import HomeNavigator from './HomeNavigator';
import {HOME, LOGIN} from 'constants/navigators';

const AppNavigator = createSwitchNavigator(
  {
    [LOGIN]: LoginNavigator,
    [HOME]: HomeNavigator,
  },
  {
    initialRouteName: LOGIN,
  },
);

export default createAppContainer(AppNavigator);
