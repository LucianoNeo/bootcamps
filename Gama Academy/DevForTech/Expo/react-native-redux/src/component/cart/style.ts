import {
  StyleSheet,Dimensions
} from 'react-native';

export default StyleSheet.create({
  container: {
    width: Dimensions.get('window').width-50,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: 20,
    flexDirection: 'row'
  },
  cartBar: {
    paddingHorizontal:20,
    flexDirection: 'row',
    width: '100%',
    height: 40,
    justifyContent:'space-between',
    marginTop:20
  },
  modalBody: {
    paddingHorizontal:20,
    flexDirection: 'row',
    width: '100%',
    justifyContent:'space-between',
    marginTop:20
  },
  contentCart: {
    backgroundColor: '#000540',
    borderRadius: 150,
    width: 35,
    height: 35,
    justifyContent:'center',
    translateX: -10,
    translateY: -10,
  },
  textContentCart: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
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
    marginRight: 15,
  },
  title:{
    fontSize: 22,
  },
  cartButton:{
    flexDirection: 'row',
  },
  backButton:{
    color: '#3ca0f9',
    fontSize:16,
    fontWeight: 'bold',
    padding: 5,
  }
})