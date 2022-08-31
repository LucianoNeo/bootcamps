import { useState } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';


import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'

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
        <Marker
          image={require('../../../assets/map_pin.png')}
          coordinate={{
            latitude: -27.54449138527775,
            longitude: -48.50007649579188,
          }}
          
        >
          <Callout>
            <View style={styles.modal}>
              <Text style={styles.text}>
                Acate
              </Text>
              <Image
                source={require('../../assets/img/logo_acate.png')}
                style={styles.logo}
              />

            </View>

          </Callout>
        </Marker>

      </MapView>
    </View>
  )
};