import React from "react";
import { Link } from "react-router-dom";
import hero1 from "./../../assets/images/hero1.png";
const Banner = () => {
  return (
    <div className="hero min-h-screen bg-light-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={hero1}></img>
        <div>
          <h1 className="text-5xl font-bold">Tools Trade News!</h1>
          <p className="py-6 ">
            {" "}
            Welcome to our tools trade website. Now you can get more powerful
            electric tools for your softy working. Please visit every page
          </p>

          <Link to="/tools">
            {" "}
            <button className="btn btn-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
