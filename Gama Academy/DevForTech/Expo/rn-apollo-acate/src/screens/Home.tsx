import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { Dimensions, FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View,ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import INFO_PERSON from '../queries';
import { favStateData } from '../store/modules/favorites/reducer';
import {
  AntDesign
} from '@expo/vector-icons';

function Home() {

  const { loading, error, data } = useQuery(INFO_PERSON)
  const [showFavorites, setShowFavorites] = useState(false)
  const favorite = useSelector(favStateData);
  return (

    <View style={styles.screen}>
      <ImageBackground 
      source={require('../../assets/img/bg.jpg')} resizeMode="cover"
      style={styles.image}
      >

      
      <View style={styles.titleView}>
        <Text style={styles.title}>Rick and Morty</Text>
      </View>

      <View style={styles.menu}>

        <TouchableOpacity
          onPress={() => setShowFavorites(false)}
          style={styles.buttons}><Text style={!showFavorites ? styles.ButtonsTextSelected : styles.ButtonsText}>All Characters</Text></TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowFavorites(true)}
          style={styles.buttons}>
          <Text style={!showFavorites ? styles.ButtonsText : styles.ButtonsTextSelected}>
            Favorites
          </Text>
          <AntDesign
          style={styles.star}
            name="star"
            size={46}
            color='yellow'
          />
        <Text style={styles.starText}>{favorite.length}</Text>
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor='black' />
      {loading && <Text>Loading ...</Text>}
      {error && <Text>Error ...</Text>}

      {data && !showFavorites &&
        <FlatList
          data={data.characters.results}
          renderItem={({ item }) => <Card card={item} />}
        />
      }

      {showFavorites &&

        <FlatList
          data={favorite}
          renderItem={({ item }) => <Card card={item} />}
        />
      }
</ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  titleView: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 30,
    paddingTop: 10,
    backgroundColor: 'black'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  buttons: {
    flex: 1,
    padding: 10,
    borderRadius: 10
  },
  ButtonsText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white'
  },
  ButtonsTextSelected: {
    textAlign: 'center',
    fontSize: 18,
    color: '#0EC01F'
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'black'
  },
  star:{
    position: 'absolute',
    right: 0,
  },
  starText:{
    position: 'absolute',
    right: 18,
    top: 25,
    color: 'black',
    fontWeight: 'bold'
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    
  },
})

export default Home