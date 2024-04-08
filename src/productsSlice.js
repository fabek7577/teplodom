import { createSlice } from "@reduxjs/toolkit";
import { updateFavourites } from "./services/apiProducts";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  brands: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, { payload }) => {
      state.products = payload;
    },
    getBrands: (state, { payload }) => {
      state.brands = payload;
    },
    addFavourite: (state, { payload }) => {
      state.products.map((product, i) => {
        if (product.id == payload.id) {
          const newObj = { ...payload, favourite: true };
          state.products[i] = newObj;
          updateFavourites(newObj);
          toast.success("Добавлено в избранное", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
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
