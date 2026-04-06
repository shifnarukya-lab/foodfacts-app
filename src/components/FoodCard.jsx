import React from "react";

const FoodCard = ({ product }) => {
  // Destructure with default values to handle missing data gracefully
  const {
    product_name = "Unknown Product",
    brands = "No brand",
    nutriments = {},
    image_small_url,
  } = product;

  // Helper to make the JSX more readable
  const getNutrient = (val) => val || 0;

  return (
    <div className="food-card">
      <div className="food-image">
        {image_small_url ? (
          <img src={image_small_url} alt={product_name} />
        ) : (
          <p>No image available</p>
        )}
      </div>

      <div className="food-info">
        <h2>{product_name}</h2>
        <p className="brand">{brands}</p>

        <ul className="nutrient-list">
          <li>
            <strong>Calories:</strong>{" "}
            {getNutrient(nutriments["energy-kcal_100g"])} kcal
          </li>
          <li>
            <strong>Protein:</strong> {getNutrient(nutriments.proteins_100g)}g
          </li>
          <li>
            <strong>Carbs:</strong> {getNutrient(nutriments.carbohydrates_100g)}
            g
          </li>
          <li>
            <strong>Fat:</strong> {getNutrient(nutriments.fat_100g)}g
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FoodCard;
