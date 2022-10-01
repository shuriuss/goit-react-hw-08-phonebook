import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//Получение контактов
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//Добавление контакта
export const addContact = createAsyncThunk(
  'contact/addContact',
  async ({ name, number }, thunkAPI) => {
    console.log(name, number);
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//Удаление контакта
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (ContactId, thunkAPI) => {
    // console.log(ContactId);
    // const dispatch=useDispatch()
    try {
      await axios.delete(`/contacts/${ContactId}`);
      console.log(ContactId);
      return ContactId
      
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
