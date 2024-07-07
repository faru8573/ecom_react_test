import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import AddProduct from "./pages/AddProduct";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/addproduct", element: <AddProduct /> },
        { path: "/details/:id", element: <ProductDetail /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
