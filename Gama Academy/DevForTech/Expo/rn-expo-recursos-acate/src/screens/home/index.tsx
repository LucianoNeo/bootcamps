import {
  Text, TouchableOpacity, View
} from 'react-native';

import styles from './style';

import {
  useNavigation
} from '@react-navigation/native';

import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import { useDispatch } from 'react-redux';
import { handleModal } from '../../redux/slice';
import Breathe from '../breathe';

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
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => handleScreen('Home')}
      >
        <FontAwesome name="home" size={24} color="black" />
        <Text style={styles.buttonText}>
          Home
        </Text>
      </TouchableOpacity>

      <View style={styles.hr}></View>

      <Text style={styles.title}>Device Resources</Text>

      <View style={styles.buttonContainer}>


        <TouchableOpacity
          style={styles.buttons}
          onPress={() => handleScreen('Camera')}
        >
          <Text><Entypo name="camera" size={18} color="black" /></Text>
          <Text style={styles.buttonText}>
            Camera
          </Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => handleScreen('Maps')}
        >
          <MaterialCommunityIcons name="google-maps" size={24} color="black" />
          <Text style={styles.buttonText}>
            Maps
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => handleScreen('Notifications')}
        >
          <MaterialCommunityIcons name="message" size={24} color="black" />
          <Text style={styles.buttonText}>
            Notifications
          </Text>
        </TouchableOpacity>



      </View>

      <View style={styles.hr}></View>


      <Text style={styles.title}>Animations</Text>

      <View style={styles.buttonContainer}>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => handleScreen('Slide')}
        >
          <MaterialCommunityIcons name="arrow-up" size={24} color="black" />
          <Text style={styles.buttonText}>
            Slide Vertical
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => handleScreen('Slide Horizontal')}
        >
          <MaterialCommunityIcons name="arrow-right" size={24} color="black" />
          <Text style={styles.buttonText}>
            Slide Horizontal
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => handleScreen('Drag Effects')}
        >
          <MaterialCommunityIcons name="hand-back-right" size={24} color="black" />
          <Text style={styles.buttonText}>
            Drag Effects
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => handleScreen('Breathe')}
        >
          <MaterialCommunityIcons name="hand-back-right" size={24} color="black" />
          <Text style={styles.buttonText}>
            Breathe
          </Text>
        </TouchableOpacity>


      </View>

      <Text
        onPress={() => dispatch(handleModal())}
        style={styles.link}>Change Navigation Style
      </Text>
    </View>
  )
};