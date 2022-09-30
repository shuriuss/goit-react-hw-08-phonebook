import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Создание JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  console.log(axios.defaults.headers.common.Authorization);
};

// Удаление JWT
const clearAuthHeader = token => {
  axios.defaults.headers.common.Authorization = '';
  console.log(token);
  token=''
  console.log(token);

};

//Регистрация пользователя
/*
 * POST @ ​/users​/signup
 * body: { name='', email='', password='' }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      const responce = await axios.post('/users/signup', data);
      setAuthHeader(responce.data.token);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//Залогинивание пользователя
/*
 * POST @ /users/login
 * body: { email ='', password='' }
 */
export const  logIn =  createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const responce = await axios.post('/users/login', data);
    setAuthHeader(responce.data.token);
    return responce.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//Разлогинивание пользовате
/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//Получение информации о пользователи
/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    //Чтение токена из стейта
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // если токена нет то ничего не выполнится
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const responce = await axios.get('/users/me');
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
