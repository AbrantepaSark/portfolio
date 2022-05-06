import React from "react";

//import { ReactComponent as Code } from "./code.svg";

const Hero = () => (
  <div className="container-none h-26 lg:py-[90px] text-center bg-sky-100 bg-im  ">
    {/* <div className="flex flex-col lg:flex-row gab-15 items-center lg:px-20 sm:px-6 ">
      <div className="flex flex-col flex-1 justify-center  w-[500px] h-[500px] ">
        <p className=" text-6xl font-bold ">
          Serves You With The Great Experience
        </p>
        <p className="  text-3xl my-5">
          Full Stack Developer with 2+ years of experience in building  web applications
        </p>
      </div>
      <div className="flex flex-1  item-center">
        <Code className="h=[300px] w-[300px]  lg:w-[500px] lg:h-[500px] ml-8" />
      </div>
    </div> */}
    <div class="max-w-sm m-auto rounded overflow-hidden shadow-lg">
      <div className="h-48 w-48 mx-auto rounded-full container bg-white"></div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Daniel Nyarko Sarkodie</div>
        <p class="text-gray-700 text-base">
          Front-End Developer
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #
        </span>
      </div>
    </div>
    {/* <div className=" w-[400px] h-[400px] item-center m-auto bg-slate-600"> */}

    {/* <div className=""> */}
    {/* <div className="h-56 w-56 rounded-full container bg-white"></div> */}
    {/* <h2>Daniel Nyarko Sarkodie</h2>
        <h5>Front-End Developer</h5> */}
    {/* </div> */}
    {/* </div> */}
  </div>
);

export default Hero;