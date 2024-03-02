import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    popularProducts: [],
};

const popularProductSlice = createSlice({
  name: "popularProducts",
  initialState,
  reducers: {
    getPopularProducts: (state, { payload }) => {
      state.popularProducts = payload;
    },
  },
});

export const {  } = popularProductSlice.actions;

export default popularProductSlice.reducer;

export function getPopularProducts() {
  return async function (dispatch) {
    const res = await fetch(`http://localhost:3333/products`);
    const data = await res.json();
    dispatch({ type: "popularProducts/getPopularProducts", payload: data });
  };
}
