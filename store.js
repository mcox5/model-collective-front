import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './slices/navSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer
  }
})
