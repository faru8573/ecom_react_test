import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

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

export const addItemInDBAsync = createAsyncThunk(
  "addTo/db",
  async (product, thunkAPI) => {
    console.log("thunkAPI", thunkAPI.getState());
    try {
      const newProduct = {
        ...product,
        id: thunkAPI.getState().itemReducer.items.length + 1,
      };

      toast.success("item successfully added in DB");
      return newProduct;
    } catch (error) {
      console.log("error while adding item to DB", error);
      toast.error("Failed to add product.");
    }
  }
);

const itemSlice = createSlice({
  name: "items",
  initialState: initialState,
  reducers: {
    setInitialItems: (state, action) => {
      state.items = action.payload;
    },
    addItemToDB: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    deleteItem: (state, action) => {
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );

      state.items = filteredItems;
      toast.success("deleted Successfully");
    },
    updateItem: (state, action) => {
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
        toast.success("updated Successfully");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInitialItemsAync.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addItemInDBAsync.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
      });
  },
});

export const itemReducer = itemSlice.reducer;
export const itemActions = itemSlice.actions;
export const itemSelector = (state) => state.itemReducer;
