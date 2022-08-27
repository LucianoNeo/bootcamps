import { Text, View, Image,TouchableOpacity, } from 'react-native';
import styles from './style';
import {IProps} from '../../type'

import {
    AntDesign
  } from '@expo/vector-icons';


  import {
    useDispatch, useSelector
  } from 'react-redux';
  
  import { 
    addNewFavorite , removeFavorite
  } from '../../store/modules/favorites/reducer';

  import { favStateData } from '../../store/modules/favorites/reducer';

function Card({card} : IProps) {

     const dispatch = useDispatch();

    const addFavorite = (item: IProps ) => {
        dispatch(addNewFavorite(item));
      }

      const removefavorite = (item: IProps ) => {
        dispatch(removeFavorite(item));
      }

      
      const favorite = useSelector(favStateData);
      
    return (

        <View style={styles.card}>
            <TouchableOpacity
            style={styles.favoriteButton}
                    onPress={() => {
                        if(favorite.includes(card.id)){
                            addFavorite(card)
                        }
                        else{

                        }
                    }}
                  >
                    <AntDesign
                      name="star"
                      size={36}
                      color='white'
                      border={1}
                    />
                  </TouchableOpacity>
        
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