import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

import {
  IProps,
  IFavState,
  IFavorite
  
} from '../../../type/index'

const initialState = {
  favorite: []
}

const FavData = createSlice({
  name: 'favData',
  initialState,
  reducers: {
    addNewFavorite: (state: IFavorite, action: PayloadAction<IProps>) => {
     
      state.favorite = [...state.favorite, action.payload]
   
    },
    removeFavorite: (state: IFavorite, action: PayloadAction<number>) => {
      const { payload } = action;
      state.favorite.splice(payload, 1)
    },
  }
})

export const { addNewFavorite } = FavData.actions;

export const { removeFavorite } = FavData.actions;

export const favStateData = (state: IFavState) => state.favorite.favorite;

export default FavData.reducer;