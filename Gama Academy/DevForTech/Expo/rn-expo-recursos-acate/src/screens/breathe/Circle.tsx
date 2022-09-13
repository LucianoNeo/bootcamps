import {
    Dimensions,
    StyleSheet
  } from 'react-native';
  
  import Animated, {
    useAnimatedStyle
  } from 'react-native-reanimated';
  
  import {
    mix,
    polar2Canvas
  } from 'react-native-redash';
  
  import {
    LinearGradient
  } from 'expo-linear-gradient';
  
  const { width } = Dimensions.get('window');
  const SIZE = width / 2;
  
  const transform = ( theta: number, value: number) => {
    "worklet";
    const { x, y } = polar2Canvas({ theta, radius: SIZE / 2 }, { x: 0, y:0 });
    const translateX = mix(value, 0, x);
    const translateY = mix(value, 0, y);
    return [{ translateX }, { translateY }, { scale: mix(value, 0.3, 1) }]
  }
  
  interface ICircleProps {
    progress: Animated.SharedValue<number>;
    goesDown: Animated.SharedValue<boolean>;
    index: number
  }
  
 export const Circle = ({ progress, goesDown, index }: ICircleProps) => {
    const theta = (index * (2 * Math.PI)) / 6;
    console.log(theta)
  
    const style = useAnimatedStyle(() => {
      return {
        transform: transform(theta, progress.value)
      }
    });
  
    return(
      <Animated.View
        style={[styles.container, style]}
      >
        <LinearGradient 
          colors={["#62BFA1", "#529CA0"]}
          style={styles.circle} 
        />
      </Animated.View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center'
    },
    circle: {
      width: SIZE,
      height: SIZE,
      borderRadius: SIZE / 2,
      opacity: 0.5
    }
  })
  
