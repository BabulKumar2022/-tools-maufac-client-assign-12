import React from "react";

const InfoCard = ({ img, cardTitle , number }) => {
  return (
    <div class="card card-side bg-base-100 shadow-xl bg-accent">
      <figure className="pl-5">
        <img src={img} alt="Movie" />
      </figure>
      <div class="card-body text-white">
        <h2 class=" text-center"> {cardTitle}</h2>
        <p className="text-center">{number}</p>
        <div class="card-actions justify-center">
          <button class="btn btn-primary btn-xs">Details</button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
