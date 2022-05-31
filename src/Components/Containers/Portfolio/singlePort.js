import React from 'react';
//import { FaDesktop } from "react-icons/fa";
import proImage from "../Hero/heroImage.jpg";


 const SinglePort = props => {
  return (
    <figure className="h-[420px] max-w-md bg-[#38393f] shadow-md">
      <img src={proImage} alt="" className="object-cover h-44 w-full" />

      <figcaption className=" pt-3 px-8 text-center ">
        <p className="font-semibold text-lg text-[#e2c647]  mb-1">
          {props.title}
        </p>
        <p className="text-[17px] text-white text-justify leading-normal">
          This is a ToDo app that built to help users manage their tasks This is
          a ToDo app that built to help users manage their tasks{" "}
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-20 py-1 md:py-2 text-lg font-semibold bg-[#e2c647] text-black hover:text-white border border-[#e2c647] hover:bg-transparent"
        >
          Visit
        </a>
        {/* <p className="mt-3 md:mt-5 text-[16px] underline text-white">
          Visit Site
        </p> */}
      </figcaption>
    </figure>
  );
}

export default SinglePort;
