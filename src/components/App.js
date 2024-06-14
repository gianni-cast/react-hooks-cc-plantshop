import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const API = "http://localhost:6001/plants"

function App() {
  const [plants, setPlants] = useState([]);

function addPlant(plant){
  fetch(API, {
    method: "POST",
    headers: {"Content-Type": "Application/JSON"},
    body: JSON.stringify(plant)
  })
  .then(resp => resp.json())
  .then(json => setPlants([...plants, json]))
}

function sellOut(plant){
  setPlants(plants.map(plt => plt.id !== plant.id ? plt : {...plt, sold: true}))
}

  useEffect(() => {fetch(API)
  .then(resp => resp.json())
  .then(data => setPlants(data))
}, []) ;

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} addPlant={addPlant} sellOut={sellOut}/>
    </div>
  );

}

export default App;
