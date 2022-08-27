import { Dimensions, StyleSheet } from "react-native"

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
    card: {
      position: "relative",
      height: 350,
      width: 350,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      shadowColor: 'black',
      shadowRadius: 6,
      shadowOpacity: 0.3,
      marginBottom: 2,
      shadowOffset: {
        width: 0,
        height: 2
      },

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
        borderRadius: 25,
        flex: 1,
        marginBottom: 2,
        width: '100%',
    },
    favoriteButton:{
      padding: 5,
      backgroundColor:'black',
      position: 'absolute',
      right: 10,
      top: 10,
      zIndex: 10,
      borderRadius: 10
    }
  })

  export default styles
  