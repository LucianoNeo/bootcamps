import {
  View,
  ScrollView,
  StyleSheet, 
  Dimensions
} from 'react-native';

import Animated, {
  useSharedValue,
  interpolateColor,
  useAnimatedStyle,
  useAnimatedScrollHandler
} from 'react-native-reanimated';

import Products from './Products'
import Card, {
  CARD_HEIGHT
} from './Card';
import Cards from './components/Cards';

import { products } from './Model';

const { width } = Dimensions.get('window');

const snapToOffset = [0, CARD_HEIGHT]

const SlideHorizontalAnimation = () => {
  const translateX = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x
    }
  })
  const style = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      translateX.value,
      products.map((_, i) => width * i),
      products.map((product) => product.color2)
    ) as string;
    return { flex: 1, backgroundColor}
  })
  return(
    <Animated.View style={style}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        snapToOffsets={snapToOffset}
        snapToEnd={false}
        decelerationRate="fast"
      >
        <View style={styles.slider}>
          <Animated.ScrollView
            onScroll={onScroll}
            scrollEventThrottle={16}
            decelerationRate="fast"
            snapToInterval={width}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            { products.map((product, index) => (
              <Card product={product} key={index} />
            ))}
          </Animated.ScrollView>
          <Products x={translateX} />
        </View>
        <Cards />
      </ScrollView>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  slider: {
    height: CARD_HEIGHT
  }
})

export default SlideHorizontalAnimation;