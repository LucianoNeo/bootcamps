import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { Dimensions, FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import INFO_PERSON from '../queries';
import { favStateData } from '../store/modules/favorites/reducer';


function Home() {

  const { loading, error, data } = useQuery(INFO_PERSON)
  const [showFavorites, setShowFavorites] = useState(false)
  const favorite = useSelector(favStateData);
  return (

    <View style={styles.screen}>
      <View style={styles.menu}>
        <TouchableOpacity
          onPress={() => setShowFavorites(false)}
          style={styles.buttons}><Text style={styles.ButtonsText}>All Characters</Text></TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowFavorites(true)}
          style={styles.buttons}><Text style={styles.ButtonsText}>Favorites</Text></TouchableOpacity>
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
  buttons: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    padding: 20,
    borderRadius: 10
  },
  ButtonsText: {
    textAlign: 'center',
    fontSize: 18,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 10



  }
})

export default Home