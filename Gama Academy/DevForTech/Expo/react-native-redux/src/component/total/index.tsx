import {
    View,
    TouchableOpacity,
    Text,
    Modal,
  } from 'react-native';
  
  import {
      useEffect,
    useState
  } from 'react';
  
  import {
    useSelector
  } from 'react-redux';
  
  import {
    cartStateData
  } from '../../store/modules/cart/reducer'
  import styles from './style'


  import "intl";
  import "intl/locale-data/jsonp/pt-BR";

export default function Total() {
    
    const [totalCart, setTotalCart] = useState(0)
    const cart = useSelector(cartStateData);
    
    useEffect(() => {
        let totalPrice = 0
        cart.map((item, index) => totalPrice += item.price)
        setTotalCart(totalPrice)
    }, [cart])
        

  return (
    <View style={styles.container}>
          <Text style={{fontWeight:'bold', fontSize:18}}>TOTAL:</Text>
          <Text style={styles.price}>{Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(totalCart)}</Text>
        </View>
  )
}
