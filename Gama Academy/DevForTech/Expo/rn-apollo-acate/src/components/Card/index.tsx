import { Text, View, Image } from 'react-native';
import styles from './style';
import {IProps} from '../../type'



function Card({card} : IProps) {
    return (

        <View style={styles.card}>
            <Image
                source={{ uri: card.image }}
                style={styles.image}
            />
            <View style={styles.imageDescriptionContainer}>
                <Text style={styles.texts}>
                    {`${card.name}, ${card.gender}`}
                </Text>
            </View>
        </View>
    )
}


export default Card