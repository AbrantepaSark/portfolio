import React from "react";

import pic from "./DSC_0931.JPG";
import heroImage from './heroImage.jpg';

//import Social from "./social";

//import { ReactComponent as Code } from "./code.svg";

const Hero = () => (
  <div className="relative w-full">
    <div className="flex absolute h-[400px] md:h-[700px] w-full bg-black opacity-70"></div>
    <div className="absolute w-full h-full flex justify-center items-center">
      <div className="container bg-[#1d2124] opacity-90 h-[300px] w-[300px] md:h-[450px] md:w-[450px]    flex justify-center items-center rounded overflow-hidden shadow-lg">
        <div>
          <img className="m-auto h-28 md:h-48 rounded-full" src={pic} alt="" />
          <div className="px-3 py-3 md:mt-4">
            <div className="font-semibold text-center font-serif text-white md:text-2xl mb-1">
              DANIEL NYARKO SARKODIE
            </div>
            <p className="text-white text-center font-light">
              ( Front-End Developer )
            </p>
          </div>
          <p className="text-white text-center font-normal md:text-lg">
            With 2+ Years of Experience
          </p>
          <div className="w-full flex justify-around my-2">
            <div className="container w-12 h-1 bg-white"></div>
          </div>
          {/* <Social /> */}
        </div>
      </div>
    </div>

    <div className="flex-shrink-0 ">
      <img src={heroImage} alt="" className="h-[400px] md:h-[700px] w-full" />
    </div>
  </div>
);

export default Hero;