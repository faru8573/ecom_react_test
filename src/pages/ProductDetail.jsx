import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { itemSelector } from "../redux/reducers/itemReducer";
import { cartActions } from "../redux/reducers/cartReducer";

const ProductDetail = () => {
  const { id } = useParams();
  const { items } = useSelector(itemSelector);
  const findItem = items.find((item) => item.id === Number(id));
  const dispatch = useDispatch();
  const { title, desc, imageUrl, price, rating, category } = findItem;

  return (
    <div className="bg-gray-900 flex flex-col min-h-screen text-gray-300 p-4">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-2/4 object-cover" />
        <div className="p-6">
          <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
          <p className="text-gray-400 mb-4">{desc}</p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl text-yellow-500">${price}</span>
            <span className="bg-yellow-500 text-black font-semibold py-1 px-3 rounded-full">
              {rating} ★
            </span>
          </div>
          <button
            onClick={() =>
              dispatch(
                cartActions.addToCart({
                  id,
                  title,
                  desc,
                  imageUrl,
                  price,
                  rating,
                  category,
                })
              )
            }
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
