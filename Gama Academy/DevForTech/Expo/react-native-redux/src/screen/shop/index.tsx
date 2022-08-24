import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import Cart from '../../component/cart'
import { products } from '../../constants'
import styles from './style'
import "intl";
import "intl/locale-data/jsonp/pt-BR";

const Shop = () => {
    return (


        <View
            style={styles.container}
        >
            <Cart />
            <ScrollView>
                {products.map(item => (
                    <View key={item.id} style={styles.card}>
                        <Image
                            style={styles.image}
                            source={{ uri: item.image }}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.brandName}>{item.brand}</Text>
                            <Text style={styles.price}>
                                {Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(item.price)}</Text>
                            <View >
                                <TouchableOpacity
                                    style={styles.buttons}
                                    onPress={() => alert('Produto adicionado')}
                                >
                                    <Text style={styles.Buttontext}>Adicionar ao carrinho</Text>
                                </TouchableOpacity >

                            </View>
                        </View>

                    </View>
                ))}
                {products.map(item => (
                    <View key={item.id} style={styles.card}>
                        <Image
                            style={styles.image}
                            source={{ uri: item.image }}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.brandName}>{item.brand}</Text>
                            <Text style={styles.price}>
                                {Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(item.price)}</Text>
                            <View >
                                <TouchableOpacity
                                    style={styles.buttons}
                                    onPress={() => alert('Produto adicionado')}
                                >
                                    <Text style={styles.Buttontext}>Adicionar ao carrinho</Text>
                                </TouchableOpacity >

                            </View>
                        </View>

                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Shop