import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import SinglePort from "./singlePort";
import Header from "../Header/header";

const Portfolio = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 95%",
        toggleActions: "play none none none",
      },
      y: 120,
      opacity: 0,
      duration: 1,
    });
  }, []);
  return (
    <div className=" py-16 px-6 lg:py-20 lg:px-28 bg-[#33343c]">
      <Header text="Portfolio" />
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-md flex flex-col mx-auto justify-center mb-12 text-white">
          <p className=" text-2xl text-center font-bold">
            Projects I have undertaken
          </p>
          <div className="container mx-auto w-12 h-1 bg-white mt-5"></div>
        </div>
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-y-14 lg:gap-24 "
        >
          <SinglePort title="ToDo App" />
          <SinglePort title="Weather App" />
          <SinglePort title="Music App" />
          <SinglePort title="Travel App" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
