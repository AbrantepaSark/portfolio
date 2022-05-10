import React from "react";

import Info from './info/info';
import Details from "./porsonal/details";
import Header from "../Header/header";

const About = () => {
    return (
      <div className="py-10 px-6 lg:py-10 lg:px-28">
        <Header text="About Me" />

        <div className=" flex flex-col gap-y-10 lg:flex-row ">
          <Info />
          <div className="flex-1 ">
            
            <Details />
          </div>
        </div>
      </div>
    );
}

export default About;

