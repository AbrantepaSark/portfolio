import React from "react";
import {} from "react-icons/";

const SkillBar = (props) => {
  return (
    <div className="flex flex-col items-center  ">
      {props.logo}
      <p className="text-gray-500 font-bold text-2xl">{props.title}</p>
      <p className="text-gray-500 text-lg">{`${props.years} Years Experience`}</p>
    </div>
  );
};
// background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
export default SkillBar;
