import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

import { 
  ICart,
  IProduct,
  ICartState
} from '../../../types'

const initialState = {
  cart: []
}

const productData = createSlice({
  name: 'productData',
  initialState,
  reducers: {
    addNewItem: ( state: ICart, action: PayloadAction<IProduct>) => {
      state.cart = [...state.cart, action.payload]
    },
    removeCartItem: ( state: ICart, action: PayloadAction<IProduct>) => {
      state.cart = [...state.cart, action.payload]
    },
  }
})

export const { addNewItem } = productData.actions;

export const { removeCartItem } = productData.actions;

export const cartStateData = (state: ICartState) => state.cart.cart;

export default productData.reducer;