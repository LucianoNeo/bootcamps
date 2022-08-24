import { configureStore } from '@reduxjs/toolkit'

import cartData from '../modules/cart/reducer'

const store = configureStore({
    reducer:{
        cartData: cartData
    }
})

export default store