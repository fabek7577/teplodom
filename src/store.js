import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import categoryReducer from "./features/categories/categorySlice";
import popularProductsReducer from "./features/popularProducts/popularProductsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoryReducer,
    popularProducts: popularProductsReducer,
  },
});
export default store;
