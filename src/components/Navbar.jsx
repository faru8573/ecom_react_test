import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Navbar = () => {
  const [cartItems, setCartItems] = useState(0);
  const isAuthenticated = false;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-slate-600 items-center">
        <div className="container mx-auto px-2 flex justify-between py-1 items-center">
          <Link to={"/"}>
            <p className="text-gray-300 text-2xl font-bold">Ecom</p>
          </Link>

          <div className="flex gap-4 items-center">
            <Link
              to="/myorders"
              className="text-gray-300 font-semibold hover:text-yellow-400"
            >
              My Orders
            </Link>

            {isAuthenticated ? (
              <>
                <button
                  to="/logout"
                  className="text-gray-300 font-semibold hover:text-yellow-400"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-300 font-semibold hover:text-yellow-400"
                >
                  Login
                </Link>
              </>
            )}

            <Link to="/cart">
              <div className="flex flex-col justify-center items-center">
                <span className="font-bold bg-cyan-600 w-6 h-6 rounded-full text-center text-yellow-50">
                  {cartItems}
                </span>
                <img
                  src={assets.cartIcon}
                  alt=""
                  className="w-12 h-8 object-fit"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
