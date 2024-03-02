import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./components/Home";
import AllNewProducts from "./features/new/AllNewProducts";
import AllCategories from "./features/categories/AllCategories";
import AllPopularProducts from "./features/popularProducts/AllPopularProducts";
import ToProviders from "./components/ToProviders";


const App = () => {
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
          path: "new",
          element: <AllNewProducts />,
        },
        {
          path: "categories",
          element: <AllCategories />,
        },
        {
          path: "popular",
          element: <AllPopularProducts />,
        },
        {
          path: "toProviders",
          element: <ToProviders />,
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
