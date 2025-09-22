import React, { useState } from "react";
import "./styles.css";
import recipesData from "./recipesData";

const RecipeFilterApp = () => {
  const [cartValue, setCartValue] = useState(0);

  const handleAddToCart = () => {
    setCartValue(cartValue + 1);
  };
  return (
    <div className="board">
      <div className="container">
        <h1>🍽️ Recipe Explorer</h1>
        <div className="nav">
          <div>
            <span>Filter by Rating:</span>
            <select name="" id="">
              <option value="">4.0+</option>
              <option value="">4.3+</option>
              <option value="">4.5+</option>
              <option value="">4.7+</option>
              <option value="">4.9</option>
            </select>
          </div>
          <div>
            <span>🛒</span>
            <span>Cart Items: {cartValue}</span>
          </div>
        </div>
        <h2>Average Rating: 4.67 (10 recipes)</h2>
        <div className="cart">
          {recipesData.map((item) => {
            console.log(item);
            return (
              <div className="card">
                <img src={item.image} alt="foodImage" />
                <h3>{item.name}</h3>
                <p>🍴 Cuisine: {item.cuisine}</p>
                <p>⭐️ Rating: ({item.reviewCount} reviews)</p>
                <button onClick={() => handleAddToCart()}>Add to Cart</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecipeFilterApp;
