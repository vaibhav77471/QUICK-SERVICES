


import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState : {
    value : [],
    loginStatus: false
  },
  reducers: {

    userlist: (state, action) => {
      state.value = action.payload;
    },

    setUserLoginStatus: (state,action) => {
      state.loginStatus = action.payload;
      localStorage.setItem('data', JSON.stringify({ value: action.payload }));
    },

    deleteUser: (state,action) => {
      state.list = state.list.filter((user) => user.id !== action.payload);
    }
  },
});

export const { userlist, setUserLoginStatus, deleteUser } = slice.actions;
export default slice.reducer;
