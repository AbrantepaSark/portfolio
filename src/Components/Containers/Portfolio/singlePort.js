import React from 'react';
import { FaDesktop } from "react-icons/fa";

 const SinglePort = props => {
  return (
    <div className="h-[150px] md:h-[200px] max-w-md gap-x-1 flex flex-row  drop-shadow-md bg-white">
      <div className="h-full w-52 flex-1 bg-[#38393f]">
        <FaDesktop className="text-white mx-auto my-10 md:my-14 h-16 w-16  md:h-20 md:w-20" />
      </div>
      <div className="flex-1 py-2 md:py-5 px-5 text-lg">
        <p className="font-semibold text-[#606365]  mb-1">{props.title}</p>
        <p className="text-[13px] md:text-[16px] text-[#606365] text-justify leading-normal">
          This is a ToDo app that built to help users manage their tasks{" "}
        </p>
        <p className="mt-3 md:mt-5 text-[16px] underline text-blue-900">
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
