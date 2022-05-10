import React from "react";

import SinglePort from "./singlePort";
import Header from "../Header/header";



const Portfolio = () => {
  return (
    <div className=" py-10 px-6 lg:py-10 lg:px-28">
      <Header text="Portfolio" />
      <div className="flex flex-wrap gap-y-8 dm:gap-y-14 md:justify-around">
        <SinglePort title="ToDo App" />
        <SinglePort title="Weather App" />
        <SinglePort title="Music App" />
        <SinglePort title="Travel App" />
      </div>
    </div>
  );
};

export default Portfolio;
