import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import images from "./utils/importImages";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log("Adding to cart:", product);
    setCart([...cart, product]);
  };
  return (
    <div
      className={`grid gap-4 p-4 justify-center items-center h-screen bg-gray-100 
              grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 
              place-items-center`}
    >
      {Object.keys(images).map((key, index) => (
        <ProductCard
          key={index}
          title={`Product ${index + 1}`}
          price={(80 + index * 10).toFixed(2)}
          image={images[key]}
          addToCart={() =>
            addToCart({
              title: `Product ${index + 1}`,
              price: (80 + index * 10).toFixed(2),
              image: images[key],
            })
          }
        />
      ))}
    </div>
  );
}

export default App;
