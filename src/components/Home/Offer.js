import React from "react";
import { Link } from "react-router-dom";
import hammerdrill from "../../assets/images/hammer-drill-.jpg";

const Offer = () => {
  return (
    <div>
      <h1 className="text-center text-4xl text-primary mt-10">Special Offer</h1>
      <div className="">
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row">
            <img src={hammerdrill} className="max-w-sm rounded-lg shadow-2xl" />
            <div className="pl-20 mx-10">
              <h1 className="text-5xl font-bold">Special Offer News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Link to="/tools">
                {" "}
                <button to="/tools" className="btn btn-primary">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
