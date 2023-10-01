// import {createSlice} from '@reduxjs/toolkit';


// function fun1() {
//     var ob = false;
//     var data = localStorage.getItem('data');
//     if (data != null)
//      {
//         var data1 =JSON.parse(data)
        
//         ob = data1.value
//         console.log(ob)
    
//     }
//     return ob;
//   }
  

// const slice=createSlice({
//     name:"loginstatus",
//     initialState:{
//         value:fun1()
//     },
//     reducers:{
//         loginstatus:(state,action)=>{
//             state.value = action.payload;
//         }
//     }
// })

// export const {loginstatus} = slice.actions;
// export default slice.reducer;

import { createSlice } from '@reduxjs/toolkit';


const slice = createSlice({
  name: 'loginstatus',
  initialState: {
    value: false, // Set the initial state to false
  },
  reducers: {
    loginstatus: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('data', JSON.stringify({ value: action.payload }));
    },
  },
});



export const { loginstatus } = slice.actions;
export default slice.reducer;