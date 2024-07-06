import { configureStore } from "@reduxjs/toolkit";
import { itemReducer } from "./reducers/itemReducer";
import { cartReducer } from "./reducers/cartReducer";

const store = configureStore({
  reducer: {
    itemReducer,
    cartReducer,
  },
});

export default store;
