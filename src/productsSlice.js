import { createSlice } from "@reduxjs/toolkit";
import { updateFavourites } from "./services/apiProducts";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, { payload }) => {
      state.products = payload;
    },
    addFavourite: (state, { payload }) => {
      state.products.map((product, i) => {
        if (product.id == payload.id) {
          const newObj = { ...payload, favourite: true };
          state.products[i] = newObj;
          updateFavourites(newObj);
        }
      });
    },
    delFavourite: (state, { payload }) => {
      state.products.map((product, i) => {
        if (product.id == payload.id) {
          const newObj = { ...payload, favourite: false };
          delete newObj.favourite;
          state.products[i] = newObj;
          updateFavourites(newObj);
        }
      });
    },
  },
});

export const { addFavourite, delFavourite } = productsSlice.actions;

export default productsSlice.reducer;
