import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen3184872Navigator from '../features/BlankScreen3184872/navigator';
import BlankScreen2184867Navigator from '../features/BlankScreen2184867/navigator';
import BlankScreen1184866Navigator from '../features/BlankScreen1184866/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen3184872: { screen: BlankScreen3184872Navigator },
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
