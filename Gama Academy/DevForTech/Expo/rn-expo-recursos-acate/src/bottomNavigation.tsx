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
import CameraScreen from './screens/camera';
import MapsApp from './screens/maps';
import Notifications from './screens/notifications';
import SlideAnimation from './screens/slideAnimation';
import SlideHorizontalAnimation from './screens/slideHorizontal';
import DragEffects from 'src/screens/dragEffects';

export default function BottomNavigation() {
  const Tab = createBottomTabNavigator();
  return (
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
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name='Camera'
          component={CameraScreen}
          options={{
            tabBarLabel: 'Camera',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="camera" color={color} size={size} />
            )
          }}
        />

        <Tab.Screen
          name='Maps'
          component={MapsApp}
          options={{
            tabBarLabel: 'Maps',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="map" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name='Notifications'
          component={Notifications}
          options={{
            tabBarLabel: 'Notifications',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="message" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name='Slide'
          component={SlideAnimation}
          options={{
            tabBarLabel: 'Slide V',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="arrow-drop-up" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name='Slide Horizontal'
          component={SlideHorizontalAnimation}
          options={{
            tabBarLabel: 'Slide H',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="arrow-right" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name='Drag Effects'
          component={DragEffects}
          options={{
            tabBarLabel: 'Drag',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="arrow-circle-up" color={color} size={size} />
            )
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}