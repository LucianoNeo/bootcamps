import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '50%',
    //justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
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
    
  },
  buttons:{
    width: 100,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1
  },
  buttonText:{
    justifyContent: 'space-between',
    
  },
  image:{
    borderRadius: 80,
    marginTop: 20,
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 25,
      height: 30,
    },
    shadowOpacity: 0.8,
    shadowRadius: 9.11,
    
  }
})