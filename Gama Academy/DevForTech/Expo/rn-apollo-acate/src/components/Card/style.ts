import { Dimensions, StyleSheet } from "react-native"

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
    card: {
      height: height - 300,
      width: 400,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 5,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 6,
      shadowOpacity: 0.3,
      elevation: 2,
      marginBottom: 2,

    },
    texts: {
      fontSize: 18,
      color: 'white',
      textShadowColor: '#000',
      textShadowRadius: 10,
      backgroundColor: 'rgba(1,1,1,0.5)',
      padding: 10,
      borderRadius: 10,
  
    },
    imageDescriptionContainer:{
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        flexDirection: 'column',
        height: '100%',
        position: 'absolute',
        left: 10,
        bottom: 10
      },
    image: {
        borderRadius: 2,
        flex: 1,
        elevation: 2,
        marginBottom: 2,
        width: '100%',
    }
  })

  export default styles
  