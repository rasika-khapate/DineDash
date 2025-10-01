import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
  },
  reducers: {
    addItem: (state, action) => {
      // This is a function that takes the current state and an action and returns the new state.
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

// My doubt

// why are we exporting actions separetely when we are already exporting the reducers which has addItems etc, we can use addItems etc from reducers itself by doing reducers.addItems etc right? whats the need of exporting them again and separetely by cartSlice.actions is my doubt

// Solution

// You got it wrong!
// You are thinking we are exporting the "reducers"(third key in the store, line num 8), but thats wrong, what we actually are exproting is the "reducer" function which is =>  ######## (state, action) => { state.items.push(action.payload); } ######### => they look like this at line num 9 , these are the actual reducer that modify the store, we are exporting this function

// And when we are exporting the cartSlice.actions? we are actually exporting the addItems , removeItems actions etc

// ✅ Summary (the key insight):
// What you're exporting    	What it is	                                     Why you need it
// cartSlice.reducer	        The actual reducer function(state, action)=>{}   Needed to tell the Redux store how to handle actions
// cartSlice.actions	        Object with action creators like addItem()	     Needed so your components can dispatch(addItem(payload))
