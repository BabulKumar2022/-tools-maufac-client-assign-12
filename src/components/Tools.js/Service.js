import React from "react";

const Service = ({ service, setToolsItem }) => {
const {name, model} = service

  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-10">
      <div class="card-body">
     
        <h2 class="card-title text-secondary text-center">{name}</h2>
        {/* <h2 class="card-title">{model}</h2> */}
        <p>{model.length} {model.length > 1 ? 'items' : 'item' } available</p>
        <div class="card-actions justify-center">
           <label for="booking-modal" disabled={model.length ===0}
          onClick={() => setToolsItem(service)} class="btn btn-primary">Book Now</label>
        </div>
      </div>
    </div>
  );
};

export default Service;
