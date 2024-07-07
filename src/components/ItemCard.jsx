import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useDispatch } from "react-redux";
import { itemActions } from "../redux/reducers/itemReducer";
import { cartActions } from "../redux/reducers/cartReducer";

const ItemCard = ({ id, title, desc, imageUrl, price, rating, category }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editCategory, setEditCategory] = useState(category);
  const [editDesc, setEditDesc] = useState(desc);
  const [editPrice, setEditPrice] = useState(price);
  const [editRate, setEditRate] = useState(rating);

  const dispatch = useDispatch();

  return (
    <div className="bg-slate-700 w-full md:w-[20em] flex flex-col gap-4 justify-between rounded-md text-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="object-contain rounded-t-lg h-48 w-full py-2"
      />
      {isEditing ? (
        <>
          <div className="flex flex-col px-2 gap-4">
            <input
              type="text"
              name="title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="rounded-md p-2 text-blue-600 outline-none"
            />
            <input
              type="text"
              name="category"
              value={editCategory}
              onChange={(e) => setEditCategory(e.target.value)}
              className="rounded-md p-2 text-blue-600 outline-none"
            />
            <input
              type="text"
              name="desc"
              value={editDesc}
              onChange={(e) => setEditDesc(e.target.value)}
              className="rounded-md p-2 text-blue-600 outline-none"
            />
            <input
              type="text"
              name="price"
              value={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
              className="rounded-md p-2 text-blue-600 outline-none"
            />
            <input
              type="text"
              name="rating"
              value={editRate}
              onChange={(e) => setEditRate(e.target.value)}
              className="rounded-md p-2 text-blue-600 outline-none"
            />
            <div className="flex justify-between p-2">
              <button
                onClick={() => {
                  setIsEditing(false);
                }}
                className="bg-yellow-500 rounded-md p-2 font-semibold text-black"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  dispatch(
                    itemActions.updateItem({
                      id,
                      title: editTitle,
                      category: editCategory,
                      desc: editDesc,
                      price: editPrice,
                      rating: editRate,
                      imageUrl,
                    })
                  );
                  setIsEditing(false);
                }}
                className="bg-green-500 rounded-md p-2 px-3 font-semibold text-black"
              >
                Save
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-sm text-gray-400 mb-4">{category}</p>
            <p className="text-md mb-4">{desc}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold">${price}</span>
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md">
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
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded-t-md"
            >
              Add to Cart
            </button>

            <div className="flex justify-between py-2 px-2 rounded-b-md mt-2">
              <img
                onClick={() => {
                  dispatch(itemActions.deleteItem(id));
                }}
                src={assets.recyclebin}
                alt=""
                className="w-10 h-10 object-contain border-2 hover:border-yellow-500 p-2 rounded-full"
              />
              <img
                onClick={() => {
                  setIsEditing(true);
                }}
                src={assets.pencil}
                alt=""
                className="w-10 h-10 object-contain border-2 hover:border-yellow-500 p-1 rounded-full"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemCard;
