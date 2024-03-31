import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
      toast.success("Добавлено в корзину", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    delFromBasket: (state, { payload }) => {
      state.basket = state.basket.filter((product) => product.id !== payload);
    },
  },
});

export const { addToBasket, delFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
