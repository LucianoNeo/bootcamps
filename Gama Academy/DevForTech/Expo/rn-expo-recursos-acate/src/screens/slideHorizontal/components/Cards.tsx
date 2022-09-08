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
      picture: require('./cards/pizza1.jpg'),
      caption: 'Pizza Marguerita'
    },
    {
      picture: require('./cards/pizza2.png'),
      caption: 'Pizza Calabresa com cebola'
    },
    {
      picture: require('./cards/pizza3.jpg'),
      caption: 'Pizza Calabresa'
    },
    {
      picture: require('./cards/pizza4.png'),
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
        <View>
          <Image source={picture} />
        </View>
        <View>
          <Text>{caption}</Text>
        </View>
      </>
    )
  }
  
  const Cards = () => {
    return (
      <View>
        <Text>Cards</Text>
      </View>
    )
  }
  
  export default Cards;