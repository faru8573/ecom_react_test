import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { cartSelector } from "../redux/reducers/cartReducer";

const Navbar = () => {
  const isAuthenticated = false;
  const [isOpen, setIsOpen] = useState(false);

  const { cartItems } = useSelector(cartSelector);

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="bg-slate-600 w-full fixed top-0 z-10">
        <div className="container mx-auto px-2 flex justify-between py-2 items-center">
          <Link to={"/"}>
            <p className="text-gray-300 text-2xl font-bold">Ecom</p>
          </Link>

          <div className="hidden md:flex gap-4 items-center">
            <Link
              to="/addproduct"
              className="text-gray-300 font-semibold hover:text-yellow-400 flex items-center"
            >
              <div className="bg-green-500 rounded-full text-xl font-bold text-white w-[30px] h-[30px] text-center">
                +
              </div>
              Add Product
            </Link>
            <Link
              to="/myorders"
              className="text-gray-300 font-semibold hover:text-yellow-400"
            >
              My Orders
            </Link>

            {isAuthenticated ? (
              <button
                to="/logout"
                className="text-gray-300 font-semibold hover:text-yellow-400"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-gray-300 font-semibold hover:text-yellow-400"
              >
                Login
              </Link>
            )}

            <Link to="/cart">
              <div className="flex flex-col justify-center items-center">
                <span className="font-bold bg-cyan-600 w-6 h-6 rounded-full text-center text-yellow-50">
                  {cartItems.length}
                </span>
                <img
                  src={assets.cartIcon}
                  alt="cart"
                  className="w-12 h-8 object-fit"
                />
              </div>
            </Link>
          </div>

          <div className="md:hidden">
            <img
              onClick={() => setIsOpen((prev) => !prev)}
              src={assets.menu}
              alt="menu"
              className="w-[30px] h-[30px] rounded-full filter invert cursor-pointer"
            />
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-slate-600 w-full px-2 pb-4 absolute top-full left-0 z-10">
            <div className="flex flex-col items-start gap-4 px-2">
              <Link
                to="/addproduct"
                className="text-gray-300 font-semibold hover:text-yellow-400 flex items-center mb-2"
              >
                <div className="bg-green-500 rounded-full text-xl font-bold text-white w-[30px] h-[30px] text-center">
                  +
                </div>
                Add Product
              </Link>
              <Link
                to="/myorders"
                className="text-gray-300 font-semibold hover:text-yellow-400 mb-2"
              >
                My Orders
              </Link>

              {isAuthenticated ? (
                <button
                  to="/logout"
                  className="text-gray-300 font-semibold hover:text-yellow-400 mb-2"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="text-gray-300 font-semibold hover:text-yellow-400 mb-2"
                >
                  Login
                </Link>
              )}

              <Link to="/cart" className="flex items-center">
                <span className="font-bold bg-cyan-600 w-6 h-6 rounded-full text-center text-yellow-50">
                  {cartItems.length}
                </span>
                <img
                  src={assets.cartIcon}
                  alt="cart"
                  className="w-12 h-8 object-fit ml-2"
                />
              </Link>
            </div>
          </div>
        )}
      </div>

      <div
        className={`container mx-auto mt-[5em] ${isOpen ? "mt-[16em]" : ""}`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
