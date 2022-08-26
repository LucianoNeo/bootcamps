import {
  View,
  TouchableOpacity,
  Text,
  Modal
} from 'react-native';

import {
  useState
} from 'react';

import {
  useSelector
} from 'react-redux';

import {
  cartStateData
} from '../../store/modules/cart/reducer'

import {
  AntDesign
} from '@expo/vector-icons';

import styles from './style'
import { products } from '../../constants';

import { IProduct } from '../../types/index';

import { useDispatch } from 'react-redux';

import { removeCartItem } from '../../store/modules/cart/reducer';
import "intl";
import "intl/locale-data/jsonp/pt-BR";

const Cart = () => {

  const [showCartModal, setShowCartModal] = useState(false)

  const cart = useSelector(cartStateData);

  const dispatch = useDispatch();

  const removeCartItemShop = (index: number) => {
    dispatch(removeCartItem(index));
  }

  return (
    <View
      style={styles.container}
    >
      <Modal
        animationType='slide'
        visible={showCartModal}
        onRequestClose={
          () => setShowCartModal(!showCartModal)
        }
      >
        <View
          style={styles.modalBody}
        >
          <TouchableOpacity
            onPress={() => setShowCartModal(!showCartModal)}
          >
            <AntDesign
              name="close"
              size={24}
              color="black"
            />
            <Text>Fechar</Text>
          </TouchableOpacity>

          {cart.length > 0 ? (
            <View>
              {cart.map((item, index) => (
                <View
                  key={index}
                  style={styles.items}
                >
                  <Text style={styles.texts}>{item.name}</Text>
                  <Text style={styles.texts}>{Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(item.price)}</Text>

                  <TouchableOpacity
                    onPress={() => removeCartItemShop(index)}
                  >
                    <AntDesign
                      name="delete"
                      size={24}
                      color="red"
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ) : (
            <View>
              <Text>Adicione itens ao seu carrinho</Text>
            </View>
          )}
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => setShowCartModal(!showCartModal)}
      >

        <AntDesign
          name="shoppingcart"
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <View
        style={styles.contentCart}
      >
        <Text
          style={styles.textContentCart}
        >
          {cart?.length}
        </Text>
      </View>
    </View>
  )
};

export default Cart;