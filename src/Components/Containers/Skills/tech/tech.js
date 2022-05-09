import React from 'react'

import SkillBar from '../skillBar';

 const Tech = () => {
  return (
    <div className="flex-1">
      <p className="mb-5 text-center text-md font-bold text-slate-700 ">
        Professional Skills
      </p>
      <SkillBar
        title="HTML & CSS"
        width={"w-11/12"}
        barColor={"bg-gray-700"}
        percentage="90%"
      />
      <SkillBar
        title="JavaScript"
        width={"w-10/12"}
        barColor={"bg-gray-700"}
        percentage="80%"
      />
      <SkillBar
        title="Reactjs"
        width={"w-8/12"}
        barColor={"bg-gray-700"}
        percentage="70%"
      />
      <SkillBar
        title="TailWind CSS"
        width={"w-11/12"}
        barColor={"bg-gray-700"}
        percentage="90%"
      />
      <SkillBar
        title="Figma"
        width={"w-9/12"}
        barColor={"bg-gray-700"}
        percentage="80%"
      />
      <SkillBar
        title="Git"
        width={"w-7/12"}
        barColor={"bg-gray-700"}
        percentage="60%"
      />
    </div>
  );
}

export default Tech;
