import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Header from "../Header/header";
import ResumeSection from "./resumeSection";

const Resume = () => {
  gsap.registerPlugin(ScrollTrigger);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.from(leftRef.current, {
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      x: -100,
      opacity: 0,
      duration: 1.5,
    });
  }, []);

  useEffect(() => {
    gsap.from(rightRef.current, {
      scrollTrigger: {
        trigger: rightRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      x: 100,
      opacity: 0,
      duration: 1.5,
    });
  }, []);
  return (
    <div className="py-16 px-6 lg:py-20 lg:px-28 bg-[#38393f]">
      <Header text="Resume" />
      <div className="flex flex-col text-lg gap-y-10 md:flex-row">
        <div className="flex-1 gap-x-5" ref={leftRef}>
          <p className="font-semibold text-lg text-center md:text-xl text-white   ">
            Work Experience
          </p>
          <div className=" flex flex-col">
            <ResumeSection
              title="Front-End Web Developer"
              subTitle="Ume Businesses"
              location="Cape Coast, Ghana"
              time="2019 - Date"
            />
            <ResumeSection
              title="Front-End Web Developer"
              subTitle="ExposeCampus"
              location="Cape Coast, Ghana"
              time="2019 - 2020"
            />
          </div>
        </div>
        <div className="flex-1" ref={rightRef}>
          <p className="font-semibold text-white text-center text-xl ">
            Education
          </p>
          <div className=" flex flex-col">
            <ResumeSection
              title="B.Sc. Computer Science"
              subTitle="University of Cape Coast"
              location="Cape Coast, Ghana"
              time="2017 - 2021"
            />
            <ResumeSection
              title="General Science"
              subTitle="Sunyani Senior High School"
              location="Sunyani, Ghana"
              time="2013 - 2016"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
