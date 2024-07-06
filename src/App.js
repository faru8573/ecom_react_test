import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
