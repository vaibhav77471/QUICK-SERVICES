import {createSlice} from '@reduxjs/toolkit';

const slice=createSlice({
    name:"UserType",
    initialState:{
        value: "User"
    },
    reducers:{
       
        UserType:(state,action)=>{
            state.value= action.payload;

        },

        
    }
})

export const {UserType} = slice.actions;
export default slice.reducer;
