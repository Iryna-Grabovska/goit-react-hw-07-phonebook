import { createSlice } from '@reduxjs/toolkit';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('0123456789', 8);
const initialState = [];
const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    formSubmithandle: {
      reducer: (state, action) => {
        return [...state, action.payload];
      },
      prepare: contact => ({
        payload: { ...contact, id: nanoid() },
      }),
    },
    deleteContact: (state, action) =>
      state.filter(i => i.id !== action.payload),

    visibleContacts: (state, action) =>
      state.filter(state =>
        state.value.toLowerCase().includes(action.payload.toLowerCase()),
      ),
  },
});
export const { formSubmithandle, deleteContact, visibleContacts } =
  contactSlice.actions;
export default contactSlice.reducer;
