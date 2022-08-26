import { 
  StyleSheet
 } from 'react-native';

 export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    //backgroundColor: 'black'
  },
  card: {
    
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor:  '#ededeb',
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12
  },
  image: {
    height: 150,
    width: 150
  },
  infoBox: {
    width: 180,
    marginLeft: 15,
    justifyContent:'space-between',
    paddingVertical: 20
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  brandName: {
    fontSize: 14
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
 })