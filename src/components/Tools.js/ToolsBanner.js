import React from "react";
import tools from '../../assets/images/circular-saw-.jpg'
const ToolsBanner = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src={tools} alt=""
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">Available Tools</h1>
          
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ToolsBanner;
