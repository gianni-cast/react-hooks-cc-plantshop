import React, { useState } from "react";

function PlantCard({ plant, sellOut }) {
  const [sold, setSold] = useState(plant.sold || false)

  function handleSellOut() {
    sellOut(plant)
    setSold(true)
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {!sold ? (<button className="primary" onClick={handleSellOut}>In Stock</button>) : (<button>Out of Stock</button>)}
    </li>
  );
}

export default PlantCard;
