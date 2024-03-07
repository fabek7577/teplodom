import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import categoryReducer from "./features/categories/categorySlice";
import popularProductsReducer from "./features/popularProducts/popularProductsSlice";
import basketReducer from "./features/navbar/basket/basketSlice";
import favouritesReducer from "./features/navbar/favourites/favouritesSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoryReducer,
    popularProducts: popularProductsReducer,
    basket: basketReducer,
    favourites: favouritesReducer,
  },
});
export default store;
