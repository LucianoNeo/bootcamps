import {
    View,
    Text
  } from 'react-native';
  
  import {
    SafeAreaView
  } from 'react-native-safe-area-context';
  
  import Tile from './Tile';
  
  const tiles = [
    {
      id: 'google',
      uri: 'https://google.com'
    },
    {
      id: 'expo',
      uri: 'https://expo.io'
    },
    {
      id: 'facebook',
      uri: 'https://facebook.com'
    },
    {
      id: 'reanimated',
      uri: 'https://docs.swmansion.com/react-native-reanimated/'
    },
    {
      id: 'github',
      uri: 'https://github.com'
    },
    {
      id: 'rnnavigation',
      uri: 'https://reactnavigation.org/'
    },
    {
      id: 'youtube',
      uri: 'https://youtube.com'
    },
    {
      id: 'twitter',
      uri: 'https://twitter.com'
    }
  ]
  
  const DragItems = () => {
    return(
      <SafeAreaView>
        <View>
          <Text>Drag Items</Text>
        </View>
      </SafeAreaView>
    )
  }
  
  export default DragItems;