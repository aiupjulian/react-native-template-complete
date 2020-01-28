import {createSwitchNavigator} from 'react-navigation';
import {FirstScreen, SecondScreen} from 'screens';
import {FIRST, SECOND} from 'constants/screens';

export default createSwitchNavigator(
  {
    [FIRST]: FirstScreen,
    [SECOND]: SecondScreen,
  },
  {
    initialRouteName: FIRST,
  },
);
