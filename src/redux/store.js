import { configureStore } from "@reduxjs/toolkit";
import { itemReducer } from "./reducers/itemReducer";

const store = configureStore({
  reducer: {
    itemReducer,
  },
});

export default store;
