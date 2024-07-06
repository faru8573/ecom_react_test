import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
};

export const getInitialItemsAync = createAsyncThunk("get/items", async () => {
  try {
    const res = await axios.get(
      "https://my-json-server.typicode.com/faru8573/dummy_products/products"
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const itemSlice = createSlice({
  name: "items",
  initialState: initialState,
  reducers: {
    setInitialItems: (state, action) => {
      state.items = action.payload;
    },
    deleteItem: (state, action) => {
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );

      state.items = filteredItems;
    },
    updateItem: (state, action) => {
      console.log(action);
      const { id, category, title, desc, price, rating, imageUrl } =
        action.payload;
      const findItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findItemIndex !== -1) {
        const updatedItem = {
          id,
          category,
          title,
          desc,
          price,
          rating,
          imageUrl,
        };
        state.items[findItemIndex] = updatedItem;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInitialItemsAync.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const itemReducer = itemSlice.reducer;
export const itemActions = itemSlice.actions;
export const itemSelector = (state) => state.itemReducer;
