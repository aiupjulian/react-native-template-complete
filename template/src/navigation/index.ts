import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import LoginNavigator from './LoginNavigator';
import HomeNavigator from './HomeNavigator';

const AppNavigator = createSwitchNavigator(
  {
    LoginNavigator: LoginNavigator,
    HomeNavigator: HomeNavigator,
  },
  {
    initialRouteName: 'LoginNavigator',
  },
);

export default createAppContainer(AppNavigator);
