import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeFromCart: (state, action) => {
      console.log(action);
      const filteredItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      state.cartItems = filteredItems;
    },
  },
  extraReducers: (builder) => {},
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
export const cartSelector = (state) => state.cartReducer;
