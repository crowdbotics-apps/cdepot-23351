import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile184895Navigator from '../features/UserProfile184895/navigator';
import BlankScreen2184867Navigator from '../features/BlankScreen2184867/navigator';
import BlankScreen1184866Navigator from '../features/BlankScreen1184866/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile184895: { screen: UserProfile184895Navigator },
BlankScreen2184867: { screen: BlankScreen2184867Navigator },
BlankScreen1184866: { screen: BlankScreen1184866Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
