import { Text, View, StyleSheet, FlatList, Dimensions, StatusBar } from 'react-native';
import { useQuery } from '@apollo/client'
import INFO_PERSON from '../queries'
import Card from '../components/Card';



function Home() {

  const { loading, error, data } = useQuery(INFO_PERSON)

  return (

    <View style={styles.screen}>
      <StatusBar backgroundColor='black'/>
      {loading && <Text>Loading ...</Text>}
      {error && <Text>Error ...</Text>}
      {data &&
        <FlatList
          data={data.characters.results}
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
  texts: {
    fontSize: 18,

  }
})

export default Home