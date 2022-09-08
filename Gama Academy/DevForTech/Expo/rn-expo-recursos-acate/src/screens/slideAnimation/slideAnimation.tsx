import {
  Image,
  StyleSheet,
  View
} from 'react-native';

import { StatusBar } from 'expo-status-bar';


import Item, { MAX_HEIGHT } from './Item';

import { itens } from './Model';

import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';

export default function SlideAnimation() {

  const y = useSharedValue(0)

  const onScroll = useAnimatedScrollHandler({
    onScroll: (e) => {
      y.value = e.contentOffset.y
    }
  })


  return (
    <>
      <StatusBar hidden />
      
      <Image
      resizeMode='cover'
      style={{height:180, width:'110%'}}
      source={require('../../assets/img/hotd_logo.png')}
      />
      
      <Animated.ScrollView
        style={{
          backgroundColor: '#000',
        }}
        contentContainerStyle={{ height: (itens.length + 0.25) * MAX_HEIGHT }}
        scrollEventThrottle={16}
        onScroll={onScroll}
        decelerationRate='normal'

      >
        {itens.map((item, index) => (
          <Item index={index} y={y} item={item} key={index} />
        ))}
      </Animated.ScrollView>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    height: itens.length * MAX_HEIGHT,
    backgroundColor: 'black',
  },
})