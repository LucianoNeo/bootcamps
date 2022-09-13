import React, { ReactNode } from 'react';

import Animated, {
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent
} from 'react-native-gesture-handler';

import {
  useSafeAreaInsets
} from 'react-native-safe-area-context';

import {
  Dimensions,
  StyleProp, StyleSheet, ViewStyle
} from 'react-native';
import {
  animationConfig,
  COL,
  getOrder,
  getPosition, IPositions, SIZE
} from './Config';

interface IItemProps {
  children: ReactNode;
  id: string;
  positions: Animated.SharedValue<IPositions>;
  scrollView: React.RefObject<Animated.ScrollView>;
  scrollY: Animated.SharedValue<number>;
}

const Item = ({ 
  children,
  id,
  positions,
  scrollView,
  scrollY
 }: IItemProps) => {
  const inset = useSafeAreaInsets();
  const containerHeight = Dimensions.get('window').height - inset.top - inset.bottom;
  const contentHeight = (Object.keys(positions.value).length / COL) * SIZE;
  const position = getPosition(positions.value[id]);
  const translateX = useSharedValue(position.x);
  const translateY = useSharedValue(position.y);
  const isGestureActive = useSharedValue(false);

  useAnimatedReaction(
    () => positions.value[id],
    (newOrder) => {
      const newPosition = getPosition(newOrder);
      translateX.value = withTiming(newPosition.x, animationConfig);
      translateY.value = withTiming(newPosition.y, animationConfig);
    }
  );

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number, y: number }
  >(
    {
      onStart: ({x, y}, ctx) => {
        ctx.x = translateX.value;
        ctx.y = translateY.value;
        isGestureActive.value = true
      },
      onActive: ({ translationX, translationY }, ctx) => {
        translateX.value = translationX + ctx.x;
        translateY.value = translationY + ctx.y;

        const oldOrder = positions.value[id];
        const newOrder = getOrder({ x: translateX.value, y: translateY.value })

        if(oldOrder !== newOrder) {
          const idToSwap = Object.keys(positions.value).find(
            (key) => positions.value[key] === newOrder
          );

          if (idToSwap) {
            const newPositions = JSON.parse(JSON.stringify(positions.value));
            newPositions[idToSwap as any] = oldOrder;
            newPositions[id as any] = newOrder;
            positions.value = newPositions;
          }
        }
      },
      onEnd: () => {
        isGestureActive.value = false;
        const position = getPosition(positions.value[id]);
        translateX.value = withTiming(position.x, animationConfig);
        translateY.value = withTiming(position.y, animationConfig);
      },
    }
  );

  const style: StyleProp<ViewStyle> = useAnimatedStyle(() => {
    const scale = isGestureActive.value ? 1.1 : 1;
    const zIndex = isGestureActive.value ? 100 : 0;
    
    return {
      position: 'absolute',
      top: 0,
      left: 0,
      width: SIZE,
      height: SIZE,
      zIndex,
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale },
      ],
    }
  });

  return(
    <Animated.View style={style}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={StyleSheet.absoluteFill}>
          {children}
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  )
};

export default Item;