import React from 'react'

const SkillBar = props => {
  return (
    <div className='my-5'>
      <p className="text-sm">{props.title}</p>
      <div className="container h-6 w-11/12 bg-slate-400">
        <div className={`container h-6 ${props.width} ${props.barColor} text-white text-right pr-5`}>
          {props.percentage}
        </div>
      </div>
    </div>
  );
}

export default SkillBar;
