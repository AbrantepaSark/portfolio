import React from "react";

import SinglePort from "./singlePort";
import Header from "../Header/header";



const Portfolio = () => {
  return (
    <div className=" py-16 px-6 lg:py-20 lg:px-28 bg-[#33343c]">
      <Header text="Portfolio" />
      <div className="flex flex-wrap gap-y-8 justify-center md:gap-x-5  mt-10">
        <SinglePort title="ToDo App" />
        <SinglePort title="Weather App" />
        <SinglePort title="Music App" />
        <SinglePort title="Travel App" />
      </div>
    </div>
  );
};

export default Portfolio;
