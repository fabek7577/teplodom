import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredItems: [],
  category: "",
  price: {
    min: 0,
    max: 0,
  },
  color: "",
  brand: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilteredItems: (state, { payload }) => {
      state.filteredItems = payload.filter(
        ({ category, color, brand, price }) =>
          (category == state.category || state.category == "") &&
          (color == state.color || state.color == "") &&
          (brand == state.brand || state.brand == "") &&
          price >= state.price.min &&
          (price <= state.price.max || state.price.max == 0)
      );
    },
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
    setPrice: (state, { payload }) => {
      state.price = payload;
    },
    setColor: (state, { payload }) => {
      state.color = payload;
    },
    setBrand: (state, { payload }) => {
      state.brand = payload;
    },
    clearFilters: (state, { payload }) => {
      state.filteredItems = payload;
      state.category = "";
      state.price = {
        min: 0,
        max: 0,
      };
      state.color = "";
      state.brand = "";
    },
  },
});

export const {
  clearFilters,
  setCategory,
  setBrand,
  setPrice,
  setColor,
  setFilteredItems,
} = filterSlice.actions;

export default filterSlice.reducer;
