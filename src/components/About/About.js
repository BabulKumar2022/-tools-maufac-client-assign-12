import React from "react";
import { Link } from "react-router-dom";
import about from "../../assets/images/tutor (2).jpg";

const About = () => {
  return (
    <div className=" flex justify-center">
      <div className="">
        <div class="card w-96 bg-base-100 shadow-xl ">
          <figure class="px-10 pt-10">
            <img src={about} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Babul Kumar</h2>
            <p>Bss(Hons), MSS in Economics</p>
            <p>
              {" "}
              I am a professional laptop distributor. I distribute all kinds of
              laptop more....
            </p>
            <div class="card-actions">
            <Link to="/home">  <button class="btn btn-primary">Home</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
