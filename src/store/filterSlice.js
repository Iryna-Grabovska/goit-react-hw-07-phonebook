import { createSlice } from '@reduxjs/toolkit';
const initialState = '';

const filterSlice = createSlice({
  name: 'filterContact',
  initialState,
  reducers: {
    changeFilter: (_, action) => action.payload,
  },
});
export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
console.log(changeFilter());
