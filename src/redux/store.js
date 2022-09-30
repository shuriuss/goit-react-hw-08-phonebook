import { combineReducers, configureStore } from '@reduxjs/toolkit';


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filterSlice'
import { contactReducer } from './contactSlice';
import { authReducer } from '../redux/auth/authSlice';



const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  auth: authReducer
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],

  
};

const persistedAuthReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedAuthReducer,

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);



// export const store = configureStore({
//   reducer: {
//     contacts: contactReducer,
//     filter:filterReducer
//   },
// });


////////////////////////////////////////////////////////////////
































// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from '../redux/contactSlice';
// import { filterReducer } from '../redux/filterSlice';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const persistConfig = {
//   key: 'phonebook',
//   storage,
//   whitelist: ['contacts'],
// };

// const persistedContactsReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedContactsReducer,

//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
//   devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);
