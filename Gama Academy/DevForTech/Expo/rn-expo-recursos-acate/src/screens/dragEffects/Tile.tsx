import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import {
  WebView
} from 'react-native-webview'

interface TileProps {
  id: string;
  uri: string;
  onLongPress: () => void;
}

const Tile = ({ uri }: TileProps) => {
  return(
    <View pointerEvents="none">
      <WebView
        source={{uri}}
      />
    </View>
  )
};

export default Tile;