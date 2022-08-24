import { StyleSheet } from 'react-native'

export default StyleSheet.create({
container:{
width: '100%',
height: 50,
paddingLeft: 10,
paddingRight: 40,
justifyContent:'space-between',
flexDirection:'row',
alignItems:'center'
},
contentCard:{
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius:100,
    width: 40,
    height: 40,
    alignItems:'center',
    justifyContent:'center',
    translateY: -40,
    translateX: 28,
},
text:{
    color: 'white',
    textAlign:'center',
},
cartButton:{
    translateY: 20,
},
title:{
    fontSize:20,
    fontFamily:'',
    fontWeight:'bold'
}
})