import { View, Text, } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MaterialIcons } from '@expo/vector-icons'


import Home from './screens/home'
import Maps from './screens/maps'
import CameraScreen from './screens/camera'




export default function BottomNavigator() {

    const Tab = createBottomTabNavigator()

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={{
                    //headerShown: false,
                    tabBarActiveTintColor: 'blue'
                    
                }}
            >
                <Tab.Screen
                    name='Home'
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                                name='home'
                                size={36}
                            />
                        )
                    }}
                />

                <Tab.Screen
                    name='Camera'
                    component={CameraScreen}
                    options={{
                        tabBarLabel: 'Camera',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                                name='camera'
                                //color='black'
                                size={28}
                            />
                        )
                    }}
                />

                <Tab.Screen
                    name='Maps'
                    component={Maps}
                    options={{
                        tabBarLabel: 'Maps',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                                name='map'
                                //color='black'
                                size={28}
                            />
                        )
                    }}
                />


            </Tab.Navigator>
        </NavigationContainer>
    )
}
