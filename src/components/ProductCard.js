import React, { useState } from "react";

const ProductCard = ({ title, price, image }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative group">
        <img
          src={image}
          alt="Product"
          className="w-full h-48 object-cover rounded-lg group-hover:opacity-50 transition-opacity duration-300"
        />
        <button className="absolute inset-0 m-auto flex items-center justify-center w-32 h-10 text-white bg-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Add to Cart
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="mt-4 text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-500">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
