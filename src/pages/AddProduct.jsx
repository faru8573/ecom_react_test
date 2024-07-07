import React, { useState } from "react";
import { addItemInDBAsync } from "../redux/reducers/itemReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price: "",
    rating: "",
    imageUrl: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleInput(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleAdd(e) {
    e.preventDefault();
    dispatch(addItemInDBAsync(formData));
    setFormData({});
    navigate("/");
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-700 p-4">
      <form
        onSubmit={handleAdd}
        className="bg-gray-300 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Add New Product
        </h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            onChange={(e) => handleInput(e)}
            type="text"
            name="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="desc"
            className="block text-gray-700 font-semibold mb-2"
          >
            Description
          </label>
          <textarea
            onChange={(e) => handleInput(e)}
            name="desc"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 font-semibold mb-2"
          >
            Price
          </label>
          <input
            onChange={(e) => handleInput(e)}
            type="number"
            name="price"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="rating"
            className="block text-gray-700 font-semibold mb-2"
          >
            Rating
          </label>
          <input
            onChange={(e) => handleInput(e)}
            type="number"
            name="rating"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="imageUrl"
            className="block text-gray-700 font-semibold mb-2"
          >
            Image Url
          </label>
          <input
            onChange={(e) => handleInput(e)}
            type="text"
            name="imageUrl"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
