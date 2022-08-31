import {configureStore} from '@reduxjs/toolkit'
import sliceData from './slice'
const store = configureStore({
    reducer: {
        appData : sliceData
    }
})

export default store