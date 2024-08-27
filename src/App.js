import React from "react";
import ProductCard from "./components/ProductCard";
import productImage from "../src/assets/shirt-1.jpg";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ProductCard
        title="Ultrafine Merino T-Shirt"
        price="80.00"
        image={productImage}
      />
    </div>
  );
}

export default App;
