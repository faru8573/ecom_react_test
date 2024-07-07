import React from "react";

const AddProduct = () => {
  return (
    <div>
      <form action="" className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="desc">Description</label>
        <input type="text" name="desc" />
        <label htmlFor="price">Price</label>
        <input type="text" name="price" />
        <label htmlFor="rating">Rating</label>
        <input type="text" name="rating" />
      </form>
    </div>
  );
};

export default AddProduct;
