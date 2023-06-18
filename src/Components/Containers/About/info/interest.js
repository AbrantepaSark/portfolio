import React from "react";

const Interest = (props) => {
  return (
    <div className="flex flex-col items-center justify-center text-gray-500  rounded-sm p-5 bg-white drop-shadow-md ">
      <span className="">{props.icon}</span>
      <p className="mt-2 text-sm md:text-lg">{props.text}</p>
    </div>
  );
};

export default Interest;
