import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import contactsReducer from './contactsSlice';
import filterContactReducer from './filterSlice';
import {contactsApi} from './contactsApi';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
[contactsApi.reducerPath]: contactsApi.reducer,
    filterContact: filterContactReducer,
  },
  middleware: (getDefaultMiddleware) =>
//    [
//  ...getDefaultMiddleware().contactsApi.middleware,
//    ] ,
getDefaultMiddleware().concat(contactsApi.middleware)
});
setupListeners(store.dispach);
