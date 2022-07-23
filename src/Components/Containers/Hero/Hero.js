import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import Download from "../DownloadBtn/button";
// import pic from "./DSC_0931.JPG";
import heroImage from "./heroImage.jpg";

const Hero = () => {
  let ref = useRef(null);

  useEffect(() => {
    gsap.from(ref.current, { delay: 0.2, opacity: 0, duration: 1.5, y: 150 });
  }, []);

  return (
    <div className="relative w-full">
      <div className="flex absolute h-[500px] md:h-[700px] w-full bg-[#2e2f34] opacity-80"></div>
      <div
        ref={ref}
        className="absolute box  w-full h-full flex justify-center items-center"
      >
        <div className="container flex justify-center items-center w-4/5 md:w-1/2">
          <div className="text-center text-white ">
            <p className="md:text-xl font-light">I am a </p>
            <p className="font-bold text-4xl md:text-6xl">Web Developer</p>
            <p className="leading-6 text-lg md:text-xl md:mt-4 mt-2 font-light">
              Are you looking for a developer for an amazing user interface With
              great user experience? Lets get connected.
            </p>
            <div className="mt-6 md:mt-10">
              <Download />
            </div>
          </div>
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
};

export default Hero;
