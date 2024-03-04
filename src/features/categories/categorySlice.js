import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  categoryProducts: [],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategories: (state, { payload }) => {
      state.categories = payload;
    },
    getCategoryProducts: (state, { payload }) => {
      state.categoryProducts = payload;
    },
  },
});

export const {} = categorySlice.actions;

export default categorySlice.reducer;