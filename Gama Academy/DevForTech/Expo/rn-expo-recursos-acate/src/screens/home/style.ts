import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    //justifyContent: 'space-between',
    //alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 60,
    position: 'relative',
    
    
  },
  text: {
    fontWeight: 'bold',
    textAlign:'left'
   
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  buttons:{
    width: 100,
    height: 80,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 10
  },
  buttonText:{
    padding: 5,
    textAlign: 'center',
    fontSize: 10
    
  },
  image:{
    borderRadius: 200,
    marginTop: 20,
  },
  link:{
    position: 'absolute',
    color: '#007AFF',
    bottom: 80,
    right: 20,
  },
  hr:{
    width: '100%', 
    height: 1, 
    backgroundColor: '#888',
    marginVertical:20
  },
  title:{
    fontWeight: 'bold',
    marginBottom:40
  },
})