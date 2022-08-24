import { SafeAreaView, Text } from "react-native"
import Shop from "./shop"
import { Provider } from 'react-redux'
import store from '../store/modules'

const AppStartup = () => {
    return (
        <Provider store={store}>
        <SafeAreaView style={{marginTop:30}}>
            <Shop/>
        </SafeAreaView>
        </Provider>
    )
}

export default AppStartup