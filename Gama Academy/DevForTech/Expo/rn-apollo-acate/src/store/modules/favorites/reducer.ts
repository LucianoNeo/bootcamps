import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

import {
  IProps,
  IFavState,
  IFavorite,
  ICard
  
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
    removeFavorite: (state: IFavorite, action: PayloadAction<ICard>) => {
      
      let remove = state.favorite.filter((item) => item.id !== action.payload.id)
      state.favorite = remove
    },
  }
})

export const { addNewFavorite } = FavData.actions;

export const { removeFavorite } = FavData.actions;

export const favStateData = (state: IFavState) => state.favorite.favorite;

export default FavData.reducer;