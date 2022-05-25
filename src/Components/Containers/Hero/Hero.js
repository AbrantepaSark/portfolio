import React from "react";

import Download from "../DownloadBtn/button";

// import pic from "./DSC_0931.JPG";
import heroImage from './heroImage.jpg';


const Hero = () => (
  <div className="relative w-full">
    <div className="flex absolute h-[500px] md:h-[700px] w-full bg-[#2e2f34] opacity-80"></div>
    <div className="absolute w-full h-full flex justify-center items-center">
      <div className="container flex justify-center items-center w-4/5 md:w-1/2">
        <div className="text-center text-white ">
          <p className="md:text-xl font-normal">I am a </p>
          <p className="font-bold text-4xl md:text-6xl">Web Developer</p>
          <p className="leading-6 md:text-xl mt-4 font-thin">
            I analyse, design and create great web applications, I analyse,
            design and create great web applications,I analyse, design and
            create great web applications,I analyse, design and create great web
            applications
          </p>
          <div className="mt-6 md:mt-10">
            <Download />
          </div>
        </div>
        {/* <div>
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
        </div>*/}
      </div>
    </div>

    <div className=" ">
      <img
        src={heroImage}
        alt=""
        className="object-cover h-[500px] md:h-[700px] w-full"
      />
    </div>
  </div>
);

export default Hero;