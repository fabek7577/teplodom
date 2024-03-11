import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./components/Home";
import AllNewProducts from "./features/new/AllNewProducts";
import AllCategories from "./features/categories/AllCategories";
import AllPopularProducts from "./features/popularProducts/AllPopularProducts";
import ToProviders from "./components/ToProviders";
import CategoryProducts from "./features/categories/CategoryProducts";
import { useDispatch } from "react-redux";
import { getProducts } from "./services/apiProducts";
import OnSaleProducts from "./features/sale/OnSaleProducts";
import ProductDetail, {
  loader as productItemLoader,
} from "./features/productItem/ProductDetail";
import BasketProductsList from "./features/navbar/basket/BasketProductsList";
import FavouritesProductsList from "./features/navbar/favourites/FavouritesProductsList";
import ReturnProduct from "./components/ReturnProduct";
import Search from "./features/search/Search";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "search/:searchedItem",
          element: <Search />,
        },
        {
          path: "search",
          element: <Search />,
        },
        {
          path: "new",
          element: <AllNewProducts />,
        },
        {
          path: "categories",
          element: <AllCategories />,
        },
        {
          path: "categories/:category",
          element: <CategoryProducts />,
        },
        {
          path: "popular",
          element: <AllPopularProducts />,
        },
        {
          path: "basket",
          element: <BasketProductsList />,
        },
        {
          path: "favourites",
          element: <FavouritesProductsList />,
        },
        {
          path: "toProviders",
          element: <ToProviders />,
        },
        {
          path: "returnProduct",
          element: <ReturnProduct />,
        },
        {
          path: "sale",
          element: <OnSaleProducts />,
        },
        {
          path: "products/:productId",
          element: <ProductDetail />,
          loader: productItemLoader,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
