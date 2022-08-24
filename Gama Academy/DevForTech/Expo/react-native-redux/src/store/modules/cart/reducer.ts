import { createSlice } from '@reduxjs/toolkit'
import { ICart } from '../../../types'


const initialState = {
    cart: []
}


const CartData = createSlice({
    name: 'cartData',
    initialState,
    reducers: {
        addNewItem: (state: ICart, action) => {
            console.log('Payload', action.payload)
            console.log('Estado', state.cart)
            state.cart = [...state.cart, action.payload]
        }
    }
})

export const { addNewItem } = CartData.actions

export const cartStateData = (state:any) => state.cartData

export default CartData.reducer