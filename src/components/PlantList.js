import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, sellOut}) {
  return (
    <ul className="cards"> {
      plants.map(plant => <PlantCard key={plant.id} plant={plant} sellOut={sellOut}/>)
    }</ul>
  );
}

export default PlantList;
