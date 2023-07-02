import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Here I need to create my app States

  //Example:
  // origin: null
  user: null
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducer: {
    // Example:
      setUser: (state, action) => {
        state.user = action.payload;
      }
    }
  }
);

//We need to export the actions, because we want to use them in every part of our app

//EXAMPLE:
export const { setUser } = homeSlice.actions;


//Selectors

export const selectUser = (state) => state.home.user;

export default homeSlice.reducer;
