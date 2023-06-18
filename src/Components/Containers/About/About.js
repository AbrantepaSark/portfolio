import React, { useRef } from "react";
import { gsap } from "gsap";

import Info from "./info/info";
//import Details from "./porsonal/details";
import Header from "../Header/header";
import pic from "./DSC_0931.JPG";
import ScrollTrigger from "gsap/ScrollTrigger";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // useEffect(() => {
  //   gsap.from(leftRef.current, {
  //     scrollTrigger: {
  //       trigger: leftRef.current,
  //       start: "top 90%",
  //       toggleActions: "play none none none",
  //     },
  //     x: -100,
  //     opacity: 0,
  //     duration: 1.5,
  //   });
  // }, []);

  // useEffect(() => {
  //   gsap.from(rightRef.current, {
  //     scrollTrigger: {
  //       trigger: rightRef.current,
  //       start: "top 90%",
  //       toggleActions: "play none none none",
  //     },
  //     x: 100,
  //     opacity: 0,
  //     duration: 1.5,
  //   });
  // }, []);

  return (
    <div className="py-16 px-6 font-['Roboto'] lg:py-20 lg:px-28  bg-white">
      <Header text="About Me" />
      {/* <div className="max-w-md flex flex-col mx-auto justify-center mb-12 text-white">
        <p className=" text-xl lg:text-2xl text-center text-[#545279] font-semibold">
          Personal Information
        </p>
        <div className="container mx-auto w-12 h-1 bg-[#120f46] mt-5"></div>
      </div> */}
      <div className=" flex flex-col gap-y-10 lg:flex-row md:space-x-4">
        {/* <Info /> */}
        <div className="flex-1" ref={leftRef}>
          <img
            className="m-auto h-52 md:h-64 lg:h-72 border-4 border-[#559fc9] rounded-full"
            src={pic}
            alt=""
          />
          <div className="px-3 mb-2 pt-2 md:mt-4">
            <div className="font-semibold text-xl text-center  text-[#545279] lg:text-2xl  mb-1">
              DANIEL NYARKO SARKODIE
            </div>
            <p className="text-gray-500 text-lg text-center ">
              2+ Years of Experience
            </p>
          </div>
          <div className="w-full flex justify-around my-2">
            <div className="container w-12 h-1 bg-white"></div>
          </div>
        </div>
        <div className="flex-1" ref={rightRef}>
          <Info />
          {/* <Details /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
