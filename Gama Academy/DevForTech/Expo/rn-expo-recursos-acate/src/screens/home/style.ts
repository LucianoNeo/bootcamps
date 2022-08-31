import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    //justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    position: 'relative'
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
   
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 300,
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 50,
  },
  buttons:{
    width: 120,
    height: 80,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonText:{
    justifyContent: 'space-between',
    
  },
  image:{
    borderRadius: 200,
    marginTop: 20,
  },
  link:{
    fontSize:18,
    fontWeight: 'bold',
    color: '#6ba1c4',
    position: 'absolute',
    top: -330,
    left: 35,

  }
})