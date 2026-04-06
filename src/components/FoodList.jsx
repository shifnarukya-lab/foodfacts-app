import React from "react";
import FoodCard from "./FoodCard";

const FoodList = ({ products = [] }) => {
  // 1. Guard clause for empty states
  if (!products.length) {
    return <p className="no-results">No results found.</p>;
  }

  return (
    <div className="food-list">
      {products.map((product) => (
        <FoodCard key={product.code || product._id} product={product} />
      ))}
    </div>
  );
};

export default FoodList;
