import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newProducts: [],
};

const newProductsSlice = createSlice({
  name: "newProducts",
  initialState,
  reducers: {
    getNewProducts: (state, { payload }) => {
      state.newProducts = payload;
    },
  },
});

export const {} = newProductsSlice.actions;

export default newProductsSlice.reducer;

export function getNewProducts() {
  return async function (dispatch) {
    const res = await fetch(`http://localhost:3333/productnew`);
    const data = await res.json();
    dispatch({ type: "newProducts/getNewProducts", payload: data });
  };
}
