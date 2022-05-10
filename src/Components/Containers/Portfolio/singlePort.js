import React from 'react';
import { FaDesktop } from "react-icons/fa";

 const SinglePort = props => {
  return (
      <div className="h-[200px] w-[550px] gap-x-3 flex flex-row  drop-shadow-md bg-white">
        <div className="h-full w-78 flex-1 bg-slate-900">
          <FaDesktop className="text-white mx-auto my-14 h-20 w-20" />
        </div>
        <div className="flex-1 pt-3 pr-5">
          <p className="font-bold text-black text-lg mb-2">{props.title}</p>
          <p className="text-justify text-sm">
            This is a ToDo web application that was build to help users manage
            their tasks{" "}
          </p>
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 mx-12 md:mx-20 md:mt-10 mt-5">
            Visit Site
          </button>
        </div>
      </div>
  );
}

export default SinglePort;
