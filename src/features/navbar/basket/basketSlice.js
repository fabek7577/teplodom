import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, { payload }) => {
      state.basket = state.basket.filter(
        (product) => product.id !== payload.id
      );
      state.basket = [...state.basket, payload];
    },
    delFromBasket: (state, { payload }) => {
      state.basket = state.basket.filter((product) => product.id !== payload);
    },
  },
});

export const { addToBasket, delFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
