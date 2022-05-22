import React from 'react';
import hero1 from './../../assets/images/hero1.png'
const Banner = () => {
    return (
<div class="hero min-h-screen bg-light-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={hero1}></img> 
    <div>
      <h1 class="text-5xl font-bold">Tools Trade News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;