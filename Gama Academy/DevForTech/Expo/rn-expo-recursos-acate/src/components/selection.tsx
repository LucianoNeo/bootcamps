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
  
  export default function Selection() {
    const navigation = useNavigation();
  
    function handleScreen(screen: any) {
      navigation.navigate(screen)
    }
    return (
      <View
        style={styles.container}
      >
        <Text style={styles.text}> Neo Nav Tools</Text>
        <Image
        style={styles.image}
        source={require('../../../assets/NEO1.jpg')}
        />
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
        </View>
      </View>
    )
  };