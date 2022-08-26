import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 40,
    paddingVertical: 20
  },
  modalBody: {
    width: '100%',
    height: '100%',
    //justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  contentCart: {
    backgroundColor: '#000540',
    borderRadius: 100,
    marginHorizontal: 5,
    padding: 5
  },
  textContentCart: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15
  },
  items:{
    width: 380,
    justifyContent: 'flex-end',
    flexDirection:'row',
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: '#EEE',
    padding: 20,
  },
  texts:{
    marginRight: 30,
  }
})