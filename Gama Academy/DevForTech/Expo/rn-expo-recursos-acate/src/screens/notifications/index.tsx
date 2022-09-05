import { View, Text, TouchableOpacity, Platform } from 'react-native'

import * as Device from 'expo-device'

import * as Notification from 'expo-notifications'

import styles from './style'

import { useState, useEffect, useRef } from 'react'

import {INotification} from 'src/types'

Notification.setNotificationHandler({
    handleNotification: async () => ({
        handleShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
        shouldShowAlert: true
    })
})

export default function Notifications() {

    const [expoToken, setExpoToken] = useState<string | undefined>('')
    const [notification, setNotification] = useState<any>(false)
    const notificationListener = useRef<any>()
    const responseListener = useRef<any>()


    useEffect(() => {

        registerForPushNotificationsAsync().then(token => setExpoToken(token))

        notificationListener.current = Notification.addNotificationReceivedListener(
            notification => {
                setNotification(notification)
            }
        )

        responseListener.current = Notification.addNotificationResponseReceivedListener(
            response => console.log(response)
        )
        return () => {
            Notification.removeNotificationSubscription(notificationListener.current)
            Notification.removeNotificationSubscription(responseListener.current)
        }

        
    }, [])

    return (
        <View style={styles.container}>
            
            <View
                style={styles.notificationDataContent}
            >
                <Text
                style={styles.text}
                >Sent Notification Content: </Text>
                <Text style={styles.notificationText}>
                    Title: {notification && notification?.request.content.title}
                </Text>

                <Text style={styles.notificationText}>
                    Body: {notification && notification?.request.content.body}
                </Text>

                <Text style={styles.notificationText}>
                    Date: {notification && dateFormat(notification?.date)}
                </Text>
            </View>
            <TouchableOpacity
                style={styles.buttons}
                onPress={async () => {
                    await schedulePushNotification()
                }}
            >
                <Text>
                    Notify
                </Text>
            </TouchableOpacity>
        </View>
    )
}
function dateFormat(timestamp:Date){
    let date = new Date(timestamp);
    return date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}



async function schedulePushNotification() {
    await Notification.scheduleNotificationAsync({
        content: {
            title: 'Hello from Acate',
            body: 'Im a notification',
            sound: "src/assets/notifications.wav",
            data: { data: 'Anything' },
            vibrate: [0, 250, 250, 250]
        },
        trigger: { seconds: 1 }
    })
}


async function registerForPushNotificationsAsync() {
    let token
    if (Device.isDevice) {
        const { status: existingStatus } = await Notification.getPermissionsAsync()
        let finalStatus = existingStatus
        if (existingStatus !== 'granted') {

            const { status } = await Notification.requestPermissionsAsync()
            finalStatus = status
        }
        if (existingStatus === 'granted') {
            // alert('Notification Failure')
            return
        }
        token = (await Notification.getExpoPushTokenAsync()).data
        console.log(token)
        console.log(existingStatus)
    } else {
        alert('Use a physical device to view')
    }

    if (Platform.OS === 'android') {
        await Notification.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notification.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C'
        })
    }

    return token

}