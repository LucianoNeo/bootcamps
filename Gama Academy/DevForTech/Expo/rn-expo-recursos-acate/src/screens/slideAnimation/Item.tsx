
import { Text, View, Image, Alert, Dimensions, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'


export interface Item {
    title: string,
    subtitle: string,
    picture: number,
    top: number,
}

export interface ItemProps {
    item: Item,
    y: Animated.SharedValue<number>,
    index: number
}

const Item = ({ y, index, item: { title, subtitle, picture } }: ItemProps) => {

    const container = useAnimatedStyle(() => ({
        height: interpolate(
            y.value,
            [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
            [MIN_HEIGHT, MAX_HEIGHT],
            Extrapolate.CLAMP
        )
    }

    )

    )

    const titleStyle = useAnimatedStyle(() => ({
        opacity: interpolate(
            y.value,
            [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
            [0, 1],
            Extrapolate.CLAMP
        )
    }))
    return (
        <TouchableWithoutFeedback onPress={() => Alert.alert('pressionado')}>

            <Animated.View
                style={[styles.container, container]}
            >
                <Image
                    style={styles.picture}
                    source={picture}

                />

                <View

                    style={styles.titleContainer}>
                    <Text
                        style={styles.subtitle}
                    >
                        {subtitle.toUpperCase()}
                    </Text>
                    <View

                        style={styles.mainTitle}
                    >
                        <Animated.View
                            style={titleStyle}>
                            <Text
                                style={styles.title}
                            >{title.toUpperCase()}</Text>
                        </Animated.View>
                    </View>
                </View>
            </Animated.View>
            
        </TouchableWithoutFeedback>
    )
};


export default Item


export const MIN_HEIGHT = 128
export const MAX_HEIGHT = Dimensions.get('window').height * 0.8

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        justifyContent: 'flex-end',
        height: MAX_HEIGHT,

    },
    picture: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        marginVertical: 10
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold'
    },
    titleContainer: {
        maxHeight: MAX_HEIGHT * 0.41,
        justifyContent: 'center',
        
        //backgroundColor: 'rgba(0,0,0,0.5)'
    },
    mainTitle: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        //padding: 32,
        transform: [{ translateY: 64 }]
    },
    subtitle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
})