import {createSwitchNavigator} from 'react-navigation';
import {FirstScreen, SecondScreen} from 'screens';

export default createSwitchNavigator(
  {
    First: FirstScreen,
    Second: SecondScreen,
  },
  {
    initialRouteName: 'First',
  },
);
