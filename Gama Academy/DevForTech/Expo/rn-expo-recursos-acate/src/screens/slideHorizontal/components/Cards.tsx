import {
    View,
    Text,
    Dimensions,
    Image,
    StyleSheet
  } from 'react-native';
  
  const { width } = Dimensions.get('window');

  
  export const cards = [
    {
      picture: require('../assets/pizza1.jpg'),
      caption: 'Pizza Marguerita'
    },
    {
      picture: require('../assets/pizza2.png'),
      caption: 'Pizza Catubresa'
    },
    {
      picture: require('../assets/pizza3.jpg'),
      caption: 'Pizza Calabresa'
    },
    {
      picture: require('../assets/pizza4.png'),
      caption: 'Pizza Chocolate com morango'
    }
  ]
  
  interface CardProps {
    picture: ReturnType<typeof require>
    caption: string;
  }
  
  const Card = ({ picture, caption }: CardProps) => {
    return (
      <>
        <View style={styles.container}>
          <Image source={picture}  style={styles.image}/>
        </View>
        <View style={styles.caption}>
          <Text style={styles.text}>{caption}</Text>
        </View>
      </>
    )
  }
  
  const Cards = () => {
    return (
      <View>
        {cards.map( ({picture, caption}, index) => (
          <Card key={index} picture={picture} caption={caption} />
        ))}
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 16,
      marginHorizontal: 12,
      height: width
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      width: undefined,
      height: undefined,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
    caption:{
      marginHorizontal: 24,
      padding: 24,
      backgroundColor: '#fff',
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
      marginBottom: 16
    },
    text: {
      fontSize: 16,
      textAlign: 'center',
      color: '#432406'
    }
  })
  
  export default Cards;