import {
  configureStore
} from '@reduxjs/toolkit';


import favData from "./modules/favorites/reducer";


const store = configureStore({
  reducer: {
    favorite: favData
  }
})
export default store;