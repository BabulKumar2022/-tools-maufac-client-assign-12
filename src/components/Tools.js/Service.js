import React from "react";

const Service = ({ service, setToolsItem }) => {
const {name, model, price, photo} = service

  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-10">
      <div class="card-body">
        <h2 class="card-title text-secondary text-center">Name: {name}</h2>
       <h2 class="card-title">Model: {model}</h2> 
       <img className="w-32" src={photo} alt="" />
       <p>Price: ${price}</p>
        <p>{model.length} {model.length > 1 ? 'model' : 'model' } available</p> 
        <div class="card-actions justify-center">
           <label for="booking-modal" 
          onClick={() => setToolsItem(service)} class="btn btn-primary">Book Now</label>
        </div>
      </div>
    </div>
  );
};

export default Service;
