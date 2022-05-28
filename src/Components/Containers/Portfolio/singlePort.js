import React from 'react';
//import { FaDesktop } from "react-icons/fa";
import proImage from "../Hero/heroImage.jpg";

 const SinglePort = props => {
  return (
    <div className="h-[200px] md:h-[250px] max-w-lg flex flex-row">
      <div className="h-full w-52 flex-1 ">
        <img src={proImage} alt="" className="object-cover h-full w-full" />
      </div>
      <div className="flex-1 py-2 md:py-5 p-5 text-lg bg-[#38393f]">
        <p className="font-semibold text-white  mb-1">{props.title}</p>
        <p className="text-[15px] font-light md:text-[17px] text-white text-justify leading-normal">
          This is a ToDo app that built to help users manage their tasks This is
          a ToDo app that built to help users manage their tasks{" "}
        </p>
        <p className="mt-3 md:mt-5 text-[16px] underline text-white">
          Visit Site
        </p>
        {/* <button className="bg-[#373b25a9] hover:bg-slate-800 rounded-md text-white text-sm py-2 px-4 mx-auto md:mt-5 mt-5">
          Visit Site
        </button> */}
      </div>
    </div>
  );
}

export default SinglePort;
