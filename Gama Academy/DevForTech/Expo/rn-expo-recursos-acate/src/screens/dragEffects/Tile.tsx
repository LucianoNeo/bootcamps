import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import {
  WebView
} from 'react-native-webview'

import {MARGIN,SIZE} from './Config'

interface TileProps {
  id: string;
  uri: string;
  onLongPress: () => void;
}

const Tile = ({ uri }: TileProps) => {
  return(
    <View 
    style={styles.container}
    pointerEvents="none">
      <WebView
        source={{uri}}
        style={{
          flex: 1,
          margin: MARGIN * 2,

        }}
      />
    </View>
  )
};


const styles = StyleSheet.create({
  container:{
    width: SIZE,
    height: SIZE,
    overflow: 'hidden',
    borderRadius: MARGIN,

  },

})
export default Tile;