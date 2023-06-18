import React from "react";
//import { FaDesktop } from "react-icons/fa";
import proImage from "../../../assets/project-image.png";

const SinglePort = (props) => {
  return (
    <figure className="h-[320px]  shadow-md">
      <img src={proImage} alt="" className="object-cover h-1/2 w-full" />

      <figcaption className=" pt-4 px-8  ">
        <p className="font-semibold text-xl text-gray-500  mb-2">
          {props.title}
        </p>
        <div className="flex gap-5 text-sm text-gray-500 ">
          <p>HTML</p>
          <p>CSS</p>
          <p>REACT</p>
        </div>
        <div className="flex gap-12">
          <div>
            <a
              href="/"
              className="inline-block mt-6  text-sm font-semibold text-gray-400 hover:text-gray-500"
            >
              VIEW PROJECT
            </a>
            <div className="h-[3px] w-full mt-1 bg-yellow-500"></div>
          </div>
          <div>
            <a
              href="/"
              className="inline-block mt-6  text-sm font-semibold text-gray-400 hover:text-gray-500"
            >
              VIEW CODE
            </a>
            <div className="h-[3px] w-full mt-1 bg-yellow-500"></div>
          </div>
        </div>
        {/* <p className="mt-3 md:mt-5 text-[16px] underline text-white">
          Visit Site
        </p> */}
      </figcaption>
    </figure>
  );
};

export default SinglePort;
