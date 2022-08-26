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

const CartData = createSlice({
  name: 'cartData',
  initialState,
  reducers: {
    addNewItem: (state: ICart, action: PayloadAction<IProduct>) => {
      state.cart = [...state.cart, action.payload]
    },
    removeCartItem: (state: ICart, action: PayloadAction<number>) => {
      const { payload } = action;
      state.cart.splice(payload, 1)
    },
  }
})

export const { addNewItem } = CartData.actions;

export const { removeCartItem } = CartData.actions;

export const cartStateData = (state: ICartState) => state.cart.cart;

export default CartData.reducer;