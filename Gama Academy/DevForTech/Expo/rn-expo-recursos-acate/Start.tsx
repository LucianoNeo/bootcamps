import StackNavigation from './src/stackNavigation';
import BottomNavigation from './src/bottomNavigation';
import DrawerNavigation from './src/drawerNavigation';
import Selection from './src/components/selection';
import { Modal, Text } from 'react-native'
import store from './src/redux/store'
import { hideModal, useData, changeStyle } from './src/redux/slice';
import { Provider, useSelector, useDispatch } from 'react-redux'

export default function Start() {
  const appData = useSelector(useData)

  const dispatch = useDispatch()


  return (
    <Provider store={store}>
      <Modal
        visible={appData.showModal}
      >
        <Text
          onPress={() => {
            dispatch(hideModal())
          }}
          style={{ fontSize: 22, alignSelf: 'flex-end', padding: 20, fontWeight: 'bold' }}
        >x</Text>
        <Selection />
      </Modal>
      {appData.navStyle == 'stack' && <StackNavigation />}
      {appData.navStyle == 'bottom' && <BottomNavigation />}
      {appData.navStyle == 'drawer' && <DrawerNavigation />}
    </Provider>

  )
}
