import React from "react";

const InfoCard = ({ img, cardTitle, number }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl bg-accent">
      <figure className="pl-5">
        <img src={img} alt="Movie" />
      </figure>
      <div className="card-body text-white">
        <h2 className=" text-center"> {cardTitle}</h2>
        <p className="text-center">{number}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary btn-xs">Details</button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
