import React from "react";

import Info from './info/info';
import Details from "./porsonal/details";

const About = () => {
    return (
      <div className="lg:py-12">
        <h2 className="font-bold font-serif text-cyan-900 text-3xl">
          ABOUT ME
        </h2>
        <div className="container w-12 h-1 bg-black"></div>

        <div className=" py-2 flex flex-col lg:flex-row ">
          <Info />
          <div className="flex-1 ">
            <p className=" text-md font-bold text-center text-slate-700">
              Personal Information
            </p>
            <Details />
            
          </div>
        </div>
      </div>
    );
}

export default About;

