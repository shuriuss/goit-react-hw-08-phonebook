import axios from 'axios';
// import { privateApi, publicApi } from '../http/http';

const usersApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const createUserService = body => {
  console.log(body);
  return usersApi.post('/users/signup', body);
};

// export const createUserService = body => {
//   return publicApi.post('/users/create', body);
// };

// export const loginUserService = async body => {
//   const { data } = await publicApi.post('/users/login', body);
//   return data;
// };

// export const getProfileService = async () => {
//   const { data } = await privateApi.get('/users/profile');
//   return data;
// };

// export const updateUser = async body => {
//   const { data } = await privateApi.put('/users/profile', body);
//   return data;
// };
