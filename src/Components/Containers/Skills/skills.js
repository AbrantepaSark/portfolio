import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Tech from "./tech/tech";
import Prof from "./prof/prof";
import Header from "../Header/header";

const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 95%",
        toggleActions: "play none none none",
      },
      y: 150,
      opacity: 0,
      duration: 1.5,
    });
  }, []);

  return (
    <div className="py-16 px-6 lg:py-20 lg:px-28 bg-[#38393f]">
      <Header text="Skills" />

      <div className="flex justify-center" ref={ref}>
        <div className="flex flex-col w-full lg:w-3/4 md:flex-row space-y-8 md:space-y-0 md:space-x-16">
          <Prof />
          <Tech />
        </div>
      </div>
    </div>
  );
};

export default Skills;
