import {
  NavigationContainer
} from '@react-navigation/native';

import {
  createStackNavigator
} from '@react-navigation/stack';

import CameraScreen from './screens/camera';
import DragItems from './screens/dragEffects';
import Home from './screens/home';
import Maps from './screens/maps';
import Notifications from './screens/notifications';
import SlideAnimation from './screens/slideAnimation';
import SlideHorizontalAnimation from './screens/slideHorizontal';

const { Navigator, Screen } = createStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Screen
          name="Home"
          component={Home}
        />
        <Screen
          name="Camera"
          component={CameraScreen}
        />
        <Screen
          name="Maps"
          component={Maps}
        />
        <Screen
          name="Notifications"
          component={Notifications}
        />
        <Screen
          name="Slide"
          component={SlideAnimation}
        />
        <Screen
          name="Slide Horizontal"
          component={SlideHorizontalAnimation}
        />
        <Screen
          name="Drag Effects"
          component={DragItems}
        />


      </Navigator>
    </NavigationContainer>
  )
}