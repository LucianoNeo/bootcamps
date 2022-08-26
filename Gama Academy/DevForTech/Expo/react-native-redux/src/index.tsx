import {
  SafeAreaView, Text, View, Modal, Image
} from 'react-native';

import { Provider } from 'react-redux';

import store from './store';

import Shop from './screen/shop';
import { useEffect, useState } from 'react';


const AppStartup = () => {

  const [showModal, setShowModal] = useState(true)

useEffect(() => {
  setTimeout(() => {
    setShowModal(false)
  }, 2500);
}, [])


  return (
    <SafeAreaView>
      <Provider store={store}>
      <Modal
        animationType='fade'
        visible={showModal}
        onRequestClose={
          () => setShowModal(!showModal)
        }
        >
            <View
            style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
              <Image 
              source={require('../assets/img/store.png')}
              style={{width:100,height:100,marginBottom:50}}
              />
                <Text style={{fontSize:16}}>
                  Seja bem-vindo à
                </Text>
                <Text style={{fontSize:18,fontWeight:'bold'}}>NEO STORE</Text>

            </View>
        </Modal>
        {!showModal && <Shop />}
        
      </Provider>
    </SafeAreaView>
  )
};

export default AppStartup;