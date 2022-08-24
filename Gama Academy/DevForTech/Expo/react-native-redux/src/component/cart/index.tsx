import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { products } from '../../constants'
import { AntDesign } from '@expo/vector-icons'
import styles from './style'


const Cart = () => {
    return (


        <View
            style={styles.container}
        >
            <Text style={styles.title}>NEO STORE</Text>
            <TouchableOpacity
            style={styles.cartButton}
                onPress={() => alert('test')}>
                <AntDesign
                    
                    name="shoppingcart"
                    size={36}
                ></AntDesign>
                <View style={styles.contentCard}>
                    <Text style={styles.text}>0</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Cart