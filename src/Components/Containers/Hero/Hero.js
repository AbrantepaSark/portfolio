import React from "react";

import pic from "./DSC_0931.JPG";
import heroImage from './heroImage.jpg';

import Social from "./social";

//import { ReactComponent as Code } from "./code.svg";

const Hero = () => (
  <div className="relative w-full">
    <div className="flex absolute h-[500px] md:h-[700px] w-full bg-black opacity-70">

    </div>
    <div className="absolute w-full h-full flex justify-center items-center">
      <div className="container bg-neutral-900 opacity-90 max-w-sm md:max-w-md h-[400px] md:h-[450px]    flex justify-center items-center rounded overflow-hidden shadow-lg">
        <div>
          <img className="m-auto h-44 rounded-full" src={pic} alt="" />
          <div className="px-6 py-4">
            <div className="font-bold font-serif text-white text-xl md:text-2xl mb-1">
              Daniel Nyarko Sarkodie
            </div>
            <p className="text-white text-center font-light">
              Front-End Developer
            </p>
          </div>
          <Social />
        </div>
      </div>
    </div>

    <div className="flex-shrink-0 ">
      <img src={heroImage} alt="" className="h-[500px] md:h-[700px] w-full" />
    </div>

    
  </div>
);

export default Hero;