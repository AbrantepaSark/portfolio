import React from "react";

import SinglePort from "./singlePort";
import Header from "../Header/header";



const Portfolio = () => {
  return (
    <div className=" py-16 px-6 lg:py-20 lg:px-28 bg-[#33343c]">
      <Header text="Portfolio" />
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-md flex flex-col mx-auto justify-center mb-12 text-white">
          <p className=" text-2xl text-center font-bold">Projects I have undertaken</p>
          <div className="container mx-auto w-12 h-1 bg-white mt-5"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-y-14 lg:gap-24 ">
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
