// import { configureStore } from '@reduxjs/toolkit';
// import adminReducer from '../adminredux/adminslice';
// import userlistReducer from '../adminredux/userslice'; 
// import servicesReducer from '../adminredux/serviceslice';
// import categoriesReducer from '../adminredux/categoryslice';
// import Addservice from "../adminredux/serviceslice";
// import  Addcategory  from '../adminredux/categoryslice';
// import cartreducer from "../adminredux/cartslice";
// import  userloginstatus from '../adminredux/userslice';
// import  User  from '../adminredux/user';

// const store = configureStore({
//   reducer: {
//     islogin: adminReducer,
//     isuserlogin: userloginstatus,
//     ulist: userlistReducer,
//     slist: servicesReducer,
//     clist: categoriesReducer,
//     saveservice: Addservice,
//     savecategory: Addcategory,
//     cart : cartreducer,
//     user : User
//   }
// });

// store.subscribe(() => {
//   const str = JSON.stringify(store.getState().islogin);
//   localStorage.setItem('data', str);
// });
// export default store;


import { configureStore } from '@reduxjs/toolkit';
import adminReducer from '../adminredux/adminslice';
import userlistReducer from '../adminredux/userslice'; 
import servicesReducer from '../adminredux/serviceslice';
import categoriesReducer from '../adminredux/categoryslice';
import Addservice from "../adminredux/serviceslice";
import Addcategory from '../adminredux/categoryslice';
import cartreducer from "../adminredux/cartslice";
import userloginstatus from '../adminredux/userslice'; 
import User from '../adminredux/user';
import UType from './utype';
import Booking from "./bookingslice";
import UName from "../adminredux/usernameslice"

const store = configureStore({
  reducer: {
    islogin: adminReducer,
    isuserlogin: userloginstatus,
    ulist: userlistReducer,
    slist: servicesReducer,
    clist: categoriesReducer,
    saveservice: Addservice,
    savecategory: Addcategory,
    cart: cartreducer,
    user: User,
    utype: UType,
    booking: Booking,
    username: UName
  },
});

store.subscribe(() => {
  const str = JSON.stringify(store.getState().islogin);
  localStorage.setItem('data', str);
});

export default store;


