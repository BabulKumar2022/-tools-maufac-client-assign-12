import React from "react";
import hammerdrill from '../../assets/images/hammer-drill-.jpg'

const Offer = () => {
  return (
    <div>
      <h1 className="text-center text-4xl text-primary mt-10">Special Offer</h1>
      <div className="">
        <div class="hero min-h-screen ">
          <div class="hero-content flex-col lg:flex-row">
            <img
              src={hammerdrill}
              class="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="pl-20 mx-10">
              <h1 class="text-5xl font-bold">Special Offer News!</h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button class="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
