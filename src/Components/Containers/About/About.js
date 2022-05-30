import React from "react";

import Info from './info/info';
//import Details from "./porsonal/details";
import Header from "../Header/header";
import pic from "./DSC_0931.JPG";

const About = () => {
    return (
      <div className="py-16 px-6 lg:py-20 lg:px-28 bg-[#33343c]">
        <Header text="About Me" />
        <div className="max-w-md flex flex-col mx-auto justify-center mb-12 text-white">
          <p className=" text-2xl text-center font-bold">My Personal Information</p>
          <div className="container mx-auto w-12 h-1 bg-white mt-5"></div>
        </div>
        <div className=" flex flex-col gap-y-10 md:flex-row md:space-x-10">
          {/* <Info /> */}
          <div className="flex-1">
            <img
              className="m-auto h-48 md:h-56 border-4 border-[#606365] rounded-full"
              src={pic}
              alt=""
            />
            <div className="px-3 pt-2 md:mt-4">
              <div className="font-semibold text-center font-serif text-white md:text-xl mb-1">
                DANIEL NYARKO SARKODIE
              </div>
              <p className="text-[#e2c647] text-center font-light">
                ( Front-End Developer )
              </p>
            </div>
            <p className="text-white text-center font-light md:text-lg">
              With 2+ Years of Experience
            </p>
            <div className="w-full flex justify-around my-2">
              <div className="container w-12 h-1 bg-white"></div>
            </div>
          </div>
          <div className="flex-1 ">
            <Info />
            {/* <Details /> */}
          </div>
        </div>
      </div>
    );
}

export default About;

