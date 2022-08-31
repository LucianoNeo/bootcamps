import {
  NavigationContainer
} from '@react-navigation/native';

import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import {
  MaterialIcons
} from '@expo/vector-icons';

import Home from './screens/home';
import CameraApp from './screens/camera';
import MapsApp from './screens/maps';

export default function BottomNavigation(){
  const Tab = createBottomTabNavigator();
  return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#08d13e'
        }}
        >
        <Tab.Screen 
          name='Home'
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="home" color={color} size={size} />
              )
          }}
        />
        <Tab.Screen
          name='CameraApp'
          component={CameraApp}
          options={{
            tabBarLabel: 'Camera',
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="camera" color={color} size={size} />
            )
          }}
        />

        <Tab.Screen
          name='Maps'
          component={MapsApp}
          options={{
            tabBarLabel: 'Maps',
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="map" color={color} size={size} />
            )
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}