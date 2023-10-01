import {createSlice} from '@reduxjs/toolkit';

const slice=createSlice({
    name:"Booking",
    initialState:{
        value: []
    },
    reducers:{
       
        Booking:(state,action)=>{
            state.value= action.payload;

        },

        
    }
})

export const {Booking} = slice.actions;
export default slice.reducer;
