import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import categoryReducer from "./features/categories/categorySlice";
import basketReducer from "./features/navbar/basket/basketSlice";
import favouritesReducer from "./features/navbar/favourites/favouritesSlice";
import accountReducer from "./features/account/accountSlice";
import filterReducer from "./features/search/filter/filterSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoryReducer,
    basket: basketReducer,
    favourites: favouritesReducer,
    account: accountReducer,
    filter: filterReducer
  },
});
export default store;
