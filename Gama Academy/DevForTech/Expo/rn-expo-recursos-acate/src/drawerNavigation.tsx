import { View, Text, } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MaterialIcons } from '@expo/vector-icons'


import Home from './screens/home'
import Maps from './screens/maps'
import CameraScreen from './screens/camera'

export default function DrawerNavigation() {
  return (
    <View>
        <Text>Drawer</Text>
    </View>
}
