import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        flexDirection:'column'
    },
    card: {
        marginBottom: 25,
        backgroundColor: '#ededeb',
        paddingVertical: 20,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius:10,
    },
    textContainer:{
        flexDirection:'column',
        maxWidth: 200,
        paddingRight: 10,
        
    },
    image: {
    width: 200,
    aspectRatio: 1.2, 
    resizeMode: 'contain',
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    brandName: {
        fontSize: 14,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    addCart: {},
    buttons:{
        marginTop:10,
        backgroundColor:'white',
        textAlign:'center',
        justifyContent:'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 25,
        paddingVertical: 10,
        maxWidth: 160,
    },
    Buttontext:{
        textAlign:'center',
    },
    
})