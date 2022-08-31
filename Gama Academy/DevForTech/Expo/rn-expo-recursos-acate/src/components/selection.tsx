import {
  Image, Text,
  TouchableOpacity, View
} from 'react-native';

import styles from './style';
import { changeStyle, handleModal, useData } from '../redux/slice';
import { useDispatch, useSelector } from 'react-redux'

export default function Selection() {

const appData = useSelector(useData)
const dispatch = useDispatch()


  function handleScreen(style:string) {
    dispatch(changeStyle(style))
  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}> Neo Nav Tools</Text>
      <Image
        style={styles.image}
        source={require('../../assets/NEO1.jpg')}
      />
       <Text>Choose your navigation style:</Text>
      <View style={styles.buttonContainer}>
       
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            dispatch(handleModal())
            handleScreen('stack')}}
        >
          <Text>
            Stack
          </Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            dispatch(handleModal())
            handleScreen('bottom')}}
        >
          <Text>
            Bottom
          </Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            dispatch(handleModal())
            handleScreen('drawer')}}
        >
          <Text>
            Drawer
          </Text>

        </TouchableOpacity>
      </View>
    </View>
  )
};