import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/reducers/cartReducer";

const CartItemCard = ({
  category,
  desc,
  id,
  imageUrl,
  price,
  rating,
  title,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-slate-800 w-full md:w-[20em] flex flex-col justify-between rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="object-contain rounded-t-lg h-48 w-full py-2"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-gray-100">{title}</h2>
        <p className="text-sm text-gray-400 mb-4">{category}</p>
        <p className="text-md mb-4 text-gray-300">{desc}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-green-400">${price}</span>
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            {rating} ★
          </span>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => dispatch(cartActions.removeFromCart(id))}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md"
          >
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
