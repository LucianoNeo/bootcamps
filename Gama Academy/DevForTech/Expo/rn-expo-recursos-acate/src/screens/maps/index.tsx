import { useState } from 'react';
import {
  View,
  Text,
  Image,
  Linking
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
          <Callout
          onPress={()=>{Linking.openURL('tel:04821072700');} }
          >
            <View style={styles.modal}>
              <Text style={styles.text}>
                ACATE
              </Text>
              <Text>Endereço:</Text>
              <Text>Rodovia SC 401, 4100 - Km4 - Saco Grande, Florianópolis - SC, 88032-005
              </Text>
              <Text>Telefone: </Text>
              <Text 
              style={{fontSize:18, color: '#6ba1c4',}}
              >(48) 2107-2700</Text>


            </View>

          </Callout>
        </Marker>

      </MapView>
    </View>
  )
};