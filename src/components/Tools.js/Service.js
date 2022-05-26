import React from "react";

const Service = ({ service, setToolsItem }) => {
  const { name, model, price, photo } = service;

  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-10">
      <div className="card-body">
        <h2 className="card-title text-secondary text-center">Name: {name}</h2>
        <h2 className="card-title">Model: {model}</h2>
        <img className="w-32" src={photo} alt="" />
        <p>Price: ${price}</p>
        <p>
          {model.length} {model.length > 1 ? "model" : "model"} available
        </p>
        <div className="card-actions justify-center">
          <label
            for="booking-modal"
            onClick={() => setToolsItem(service)}
            className="btn btn-primary"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
