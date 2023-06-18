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
    <div className=" py-16 px-4 lg:py-20 lg:px-28">
      <Header text="Portfolio" />
      {/* <p className="text-lg lg:text-2xl lg:text-center font-semibold mb-5 text-[#545279] ">
          Projects I have undertaken
        </p> */}
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-14 gap-x-6  "
      >
        <SinglePort title="ToDo App" />
        <SinglePort title="Weather App" />
        <SinglePort title="Music App" />
        <SinglePort title="Travel App" />
        <SinglePort title="Travel App" />
        <SinglePort title="Travel App" />
      </div>
    </div>
  );
};

export default Portfolio;
