import React, { useState } from "react";

const initialPlantFormData = {
  name: "",
  image: "",
  price: 0
}

function NewPlantForm({ addPlant }) {
  const [plant, setPlant] = useState(initialPlantFormData)

  function handleSubmit(event){
    event.preventDefault()
    addPlant(plant)
    
    setPlant(initialPlantFormData)
  }

  function handleChange(event) {
    const key = event.target.name
    const newPlantFormData = {
      ...plant,
      [key]: event.target.value
    }
    setPlant(newPlantFormData)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={plant.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={plant.image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={plant.price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
