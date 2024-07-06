import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../redux/reducers/cartReducer";
import CartItemCard from "../components/CartItemCard";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems } = useSelector(cartSelector);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [cartItems, navigate]);

  return (
    <div className="flex flex-col gap-4 p-4">
      {cartItems.length > 0 ? (
        <>
          <div className="w-full p-4 bg-slate-800 rounded-md shadow-md flex justify-between items-center text-gray-100">
            <span className="text-lg font-bold">
              Total Price: ${totalPrice}
            </span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
              Place Order
            </button>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap gap-4">
            {cartItems.map((item, idx) => (
              <CartItemCard key={idx} {...item} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <div className="text-4xl text-gray-200 font-extrabold">
            Cart is Empty
          </div>
          <div className="text-gray-400 mt-2">
            Taking you to the homepage. Please don't refresh or press anywhere,
            you will be auto-navigated.
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
