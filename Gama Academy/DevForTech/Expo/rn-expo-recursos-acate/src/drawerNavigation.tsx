import {
  NavigationContainer
} from '@react-navigation/native';

import {
  createDrawerNavigator
} from '@react-navigation/drawer';

import CameraApp from './screens/camera';
import Home from './screens/home';
import MapsApp from './screens/maps';
import Notifications from './screens/notifications';


import 'react-native-gesture-handler';
import DragEffects from 'src/screens/dragEffects';
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

        <Drawer.Screen
          name="Drag Effects"
          component={DragEffects}
        />
      </ Drawer.Navigator>
    </NavigationContainer>
  )

}