

import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: "servicelist",
  initialState: {
    value: []
  },
  reducers: {
    servicelist: (state, action) => {
      state.value = action.payload;
    },
    saveservice: (state, action) => {
      state.value =  [...state.value, action.payload]
    },
    deleteService: (state, action) => {
      // Filter out the deleted service based on its ID
      state.value = state.value.filter(service => service.id !== action.payload);
    }
  }
});

export const { saveservice, servicelist, deleteService } = slice.actions;
export default slice.reducer;
