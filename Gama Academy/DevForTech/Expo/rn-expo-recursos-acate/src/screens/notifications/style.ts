import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 40,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent:'center'
  },
  text: {
    textAlign:'center',
    margin: 10,
    color: 'white'
  },
  buttons:{
    width: 120,
    height: 80,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 10
  },
  notificationDataContent:{
    backgroundColor: '#666',
    padding: 20,
    borderRadius: 5,
    marginBottom: 40
  },
  notificationText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})