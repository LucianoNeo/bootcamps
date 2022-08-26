import {
  Button, Image, ScrollView, Text, View
} from 'react-native';

import {
  useDispatch
} from 'react-redux';

import {
  addNewItem
} from '../../store/modules/cart/reducer';

import Cart from '../../component/cart';

import styles from './style';

import { products } from '../../constants';

import {  IProduct} from '../../types/index';

import "intl";
import "intl/locale-data/jsonp/pt-BR";


const Shop = () => {

  const dispatch = useDispatch();

  const addCartItemShop = (item: IProduct) => {
    dispatch(addNewItem(item));
  }

  return (
    <View
      style={styles.container}
    >
      <Cart />
      <ScrollView>
        { products?.map( item => (
          <View 
            key={item.id}
            style={styles.card}
          >
            <Image 
              source={{ uri: item.image }}
              style={styles.image}
            />
            <View
              style={styles.infoBox}
            >
              <Text
                style={styles.productName}
              >
                {item.name}
              </Text>
              <Text
                style={styles.brandName}
              >
                {item.brand}
              </Text>
              <Text
                style={styles.price}
              >
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(item.price)}
              </Text>
              <Button
                title='Adicionar ao carrinho'
                onPress={() => addCartItemShop(item)}
              />
            </View>

          </View>
        ))}
      </ScrollView>
    </View>
  )
};

export default Shop;