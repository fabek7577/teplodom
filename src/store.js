import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categories/categorySlice";
import newProductsReducer from "./features/new/newProductsSlice";
import popularProductsReducer from "./features/popularProducts/popularProductsSlice";

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    newProducts: newProductsReducer,
    popularProducts: popularProductsReducer,
  },
});
export default store;
