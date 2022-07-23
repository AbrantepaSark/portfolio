import React from "react";

const SkillBar = (props) => {
  return (
    <div className="my-5">
      <p className="text-white text-sm md:text-lg">{props.title}</p>
      <div className="container h-4 mt-1 w-12/12 md:w-12/12 bg-slate-400 rounded-xl">
        <div
          className={`container h-4 ${props.width} ${props.barColor} rounded-l-xl text-white text-right pr-2 text-sm`}
        >
          {props.percentage}
        </div>
      </div>
    </div>
  );
};
// background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
export default SkillBar;
