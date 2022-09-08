import {
  NavigationContainer,
  DefaultTheme, DarkTheme
} from '@react-navigation/native';

import {
  createDrawerNavigator
} from '@react-navigation/drawer';

import Home from './screens/home';
import CameraApp from './screens/camera';
import MapsApp from './screens/maps';
import Notifications from './screens/notifications';


import 'react-native-gesture-handler';
import SlideAnimation from './screens/slideAnimation';
import SlideHorizontalAnimation from './screens/slideHorizontal';

export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator()
  return (
    <NavigationContainer>
      <Drawer.Navigator
      
      >
        <Drawer.Screen
          name="Home"
          component={Home}
        />
        <Drawer.Screen
          name="Camera"
          component={CameraApp}
        />
        <Drawer.Screen
          name="Maps"
          component={MapsApp}
        />

        <Drawer.Screen
          name="Notifications"
          component={Notifications}
        />
        <Drawer.Screen
          name="Slide"
          component={SlideAnimation}
        />
        <Drawer.Screen
          name="Slide Horizontal"
          component={SlideHorizontalAnimation}
        />
      </ Drawer.Navigator>
    </NavigationContainer>
  )

}