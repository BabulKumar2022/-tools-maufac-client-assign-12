import React from "react";

const InfoCard = ({ img, cardTitle }) => {
  return (
    <div class="card card-side bg-base-100 shadow-xl bg-accent">
      <figure className="pl-5">
        <img src={img} alt="Movie" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">{cardTitle}</h2>
        <p>Click the button to know</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
