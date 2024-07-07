import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
      toast.success("Item added to Cart");
    },
    removeFromCart: (state, action) => {
      const filteredItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      state.cartItems = filteredItems;
      toast.success("Item successfully removed");
    },
  },
  extraReducers: (builder) => {},
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
export const cartSelector = (state) => state.cartReducer;
