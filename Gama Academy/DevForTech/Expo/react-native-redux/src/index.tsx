import {
  SafeAreaView
} from 'react-native';

import { Provider } from 'react-redux';

import store from './store';

import Shop from './screen/shop';


const AppStartup = () => {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <Shop />
      </Provider>
    </SafeAreaView>
  )
};

export default AppStartup;