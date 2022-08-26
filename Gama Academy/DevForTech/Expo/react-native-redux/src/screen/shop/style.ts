import { 
  StyleSheet
 } from 'react-native';

 export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
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
    height: 200,
    marginLeft: 15,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  brandName: {
    fontSize: 12
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  addCart: {
    color: '#000'
  },
  removeCart: {
    color: '#000'
  },
 })