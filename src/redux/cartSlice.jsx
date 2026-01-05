import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
  },
  reducers: {
    addItem: (state, action) => {
    
      state.itemList.push(action.payload);
    },
    removeItem: (state) => {
      state.itemList.pop();
    },
    clearCart: (state) => {
      state.itemList.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
