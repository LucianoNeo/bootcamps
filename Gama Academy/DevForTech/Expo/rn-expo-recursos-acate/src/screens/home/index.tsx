import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';

import styles from './style';

import {
  useNavigation
} from '@react-navigation/native';

import { MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';

import { handleModal, useData, changeStyle } from '../../redux/slice';
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {


  const dispatch = useDispatch()

  const navigation = useNavigation();

  function handleScreen(screen: any) {
    navigation.navigate(screen)
  }
  return (
    <View
      style={styles.container}
    >

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => handleScreen('Home')}
        >
          <FontAwesome name="home" size={24} color="black" />
          <Text>
            Home
          </Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => handleScreen('Camera')}
        >
          <Text><Entypo name="camera" size={18} color="black" /></Text>
          <Text>
            Camera
          </Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => handleScreen('Maps')}
        >
          <MaterialCommunityIcons name="google-maps" size={24} color="black" />
          <Text>
            Maps
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => handleScreen('Notifications')}
        >
          <MaterialCommunityIcons name="message" size={24} color="black" />
          <Text>
            Notifications
          </Text>
        </TouchableOpacity>

      </View>



      <Text
        onPress={() => dispatch(handleModal())}
        style={styles.link}>Change Nav Style
      </Text>

    </View>
  )
};