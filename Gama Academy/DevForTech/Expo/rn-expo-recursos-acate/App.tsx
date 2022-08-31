import { Provider } from 'react-redux'
import store from './src/redux/store'
import Start from './Start';

export default function App() {

  return (
    <Provider store={store}>
      <Start />
    </Provider>

  )
}
