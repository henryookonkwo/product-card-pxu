import React from "react";
import ProductCard from "./components/ProductCard";
import images from "./utils/importImages";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {Object.keys(images).map((key, index) => (
        <ProductCard
          key={index}
          title={`Product ${index + 1}`}
          price={(80 + index * 10).toFixed(2)}
          image={images[key]}
        />
      ))}
    </div>
  );
}

export default App;
