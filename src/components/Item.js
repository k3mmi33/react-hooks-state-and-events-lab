import React, { useState } from "react";

function Item({ name, category }) {
  // Create a state variable to track if the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Event handler to toggle the item's cart status
  const toggleCart = () => {
    setInCart((prevInCart) => !prevInCart); // Toggle the inCart state
  };

  return (
    <li className={inCart ? "in-cart" : ""}> {/* Apply class based on inCart state */}
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"} {/* Change button text based on inCart state */}
      </button>
    </li>
  );
}

export default Item;