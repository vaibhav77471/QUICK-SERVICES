

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({

  name: 'cart',
  initialState: [],
  reducers: {

    addItemToCart: (state, action) => {

      // Check if the item is already in the cart
      const existingItem = state.find(item => item.id === action.payload.id);

      if (existingItem) {

        existingItem.quantity += action.payload.quantity;

      }
       else {

        // Add dateAdded property to store the date and time
        action.payload.dateAdded = new Date().toLocaleString();
        state.push(action.payload);
        
      }
    },
    // You can add more actions like removeItemFromCart, clearCart, etc.
  },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
