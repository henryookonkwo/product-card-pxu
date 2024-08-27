import React from "react";

const Rating = ({ rating, handleRating }) => {
  return (
    <div className="flex mt-2 items-center justify-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          onClick={() => handleRating(index + 1)}
          className={`h-6 w-6 cursor-pointer ${
            index < rating ? "text-yellow-500" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
