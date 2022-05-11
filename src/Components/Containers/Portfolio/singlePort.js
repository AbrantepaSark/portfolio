import React from 'react';
import { FaDesktop } from "react-icons/fa";

 const SinglePort = props => {
  return (
      <div className="h-[200px] max-w-md gap-x-1 flex flex-row  drop-shadow-md bg-white">
        <div className="h-full w-52 flex-1 bg-slate-800">
          <FaDesktop className="text-white mx-auto my-14 h-20 w-20" />
        </div>
        <div className="flex-1 p-5">
          <p className="font-semibold text-black text-lg mb-1">{props.title}</p>
          <p className="text-justify text-sm">
            This is a ToDo web application that was build to help users manage
            their tasks{" "}
          </p>
          <button className="bg-slate-500 hover:bg-blue-800 rounded-md text-white text-sm py-2 px-4 mx-auto md:mt-5 mt-3">
            Visit Site
          </button>
        </div>
      </div>
  );
}

export default SinglePort;
