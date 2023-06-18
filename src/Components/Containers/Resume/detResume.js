import React from "react";

const DetResume = (props) => {
  return (
    <div className="flex text-gray-500  md:text-lg mt-3">
      {props.icon}
      <p className="mx-3">{props.text}</p>
    </div>
  );
};

export default DetResume;
