import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image ,ImageBackground , Dimensions} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground 
      source={require('./assets/nlw9-background.png')}
      resizeMode='stretch'
      style={styles.bg}
      >
      <Image
        source={require('./assets/nlw9-logo.png')}
      />
      <Text style={styles.text}>NLW eSPORTS Day 1 ✅</Text>
      <StatusBar style='inverted'/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    marginTop: 10,
    fontSize: 22,
    color: 'white',

  },
  bg: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height+100,
    justifyContent: "center",
    alignItems:'center'
  },
});
