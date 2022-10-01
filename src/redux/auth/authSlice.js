import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
  
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = '';
      state.isLoggedIn = false;
    },
 
  },
});



export const authReducer = authSlice.reducer;
