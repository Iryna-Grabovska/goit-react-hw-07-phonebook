import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filterContactReducer from './filterSlice';
import { contactsApi } from './contactsApi';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filterContact: filterContactReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
