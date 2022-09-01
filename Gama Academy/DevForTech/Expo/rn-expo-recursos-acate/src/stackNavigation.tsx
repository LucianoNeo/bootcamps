import {
  NavigationContainer
} from '@react-navigation/native';

import {
  createStackNavigator
} from '@react-navigation/stack'

import Home from './screens/home';
import CameraScreen from './screens/camera';
import Maps from './screens/maps';
import Notifications from './screens/notifications';

const { Navigator, Screen } = createStackNavigator();

export default function StackNavigation(){
  return(
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
      </Navigator>
    </NavigationContainer>
  )
}