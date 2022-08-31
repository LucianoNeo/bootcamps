import { useState } from 'react';
import {
  View,
  Text
} from 'react-native';


import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import { ILocalization } from '../../types'

import styles from './style';

export default function Maps() {

  const [find, setFind] = useState<ILocalization>({
    latitude: -27.54449138527775,
    longitude: -48.50007649579188,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  })

  return (
    <View
      style={styles.container}
    >

      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={find}
      >


      </MapView>
    </View>
  )
};