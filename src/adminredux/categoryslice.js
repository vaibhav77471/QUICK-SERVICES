import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'categoryList',
  initialState: {
    value: [] // Initial state for categories
  },
  reducers: {
    categoryList: (state, action) => {
      state.value = [...action.payload].sort((a, b) => b.id - a.id);
    },
    

    Addcategory: (state, action) => {
      state.value = [...state.value, action.payload]
    },

    DeleteCategory:(state,action)=>{
      state.value = state.value.filter(ob=>ob.id!==action.payload)
    }

  }
});

export const { categoryList, Addcategory, DeleteCategory } = slice.actions;

export default slice.reducer;
