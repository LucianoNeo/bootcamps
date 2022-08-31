import {
  Dimensions,
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent:'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
  },
  camera: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    //aspectRatio: 0.6
  },
  containerButton:{
    
    backgroundColor: "transparent",
    flexDirection: "row",
    
  },
  button: {
    padding: 20,
    position: 'absolute',
    right: 10,
    top: 40
  },
  buttonText:{
    fontSize: 22
  },
  text: {
    fontSize: 22
  }
})