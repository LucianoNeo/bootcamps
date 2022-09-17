
import { View, StatusBar } from 'react-native';

import { Background } from './src/components';

import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter'
import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import './src/services/notificationsConfigs'
import { getPushNotificationToken } from './src/services/getPushNotificationToken';
import { useRef, useEffect } from 'react';
import { Subscription } from 'expo-modules-core'
import * as Notifications from 'expo-notifications'




export default function App() {

  const getNotificationlListener = useRef<Subscription>()

  const responseNotificationlListener = useRef<Subscription>()

  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black
  })


  useEffect(() => {
    getPushNotificationToken()
  }, [])

  useEffect(() => {
    getNotificationlListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification)
    })

    responseNotificationlListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response)
    })

    return () => {
      if (getNotificationlListener.current && responseNotificationlListener.current) {
        Notifications.removeNotificationSubscription(getNotificationlListener.current)
        Notifications.removeNotificationSubscription(responseNotificationlListener.current)
      }
    }
  }, [])

  return (
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}

    </Background>
  );
}


