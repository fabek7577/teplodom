import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategories: (state, { payload }) => {
      state.categories = payload;
    },
  },
});

export const {  } = categorySlice.actions;

export default categorySlice.reducer;

export function getCategories() {
  return async function (dispatch) {
    const res = await fetch(`http://localhost:3333/category`);
    const data = await res.json();
    dispatch({ type: "categories/getCategories", payload: data });
  };
}
