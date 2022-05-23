import React from 'react'

const SkillBar = props => {
  return (
    <div className="my-5">
      <p className="text-[#606365]">{props.title}</p>
      <div className="container h-5 w-12/12 md:w-12/12 bg-slate-400">
        <div
          className={`container h-5 ${props.width} ${props.barColor} text-white text-right pr-2 text-sm`}
        >
          {props.percentage}
        </div>
      </div>
    </div>
  );
}

export default SkillBar;
