import React from 'react'

import SkillBar from '../skillBar';

 const Tech = () => {
  return (
    <div className="flex-1 text-lg">
      <p className=" font-semibold text-[#6d6d6d] text-xl mb-3 ">
        Technical Skills
      </p>
      <SkillBar
        title="HTML, CSS, TailwindCSS"
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
        title="ReactJS, ExpressJS & NodeJS"
        width={"w-10/12"}
        barColor={"bg-gray-700"}
        percentage="80%"
      />
      <SkillBar
        title="REST API, JSON"
        width={"w-8/12"}
        barColor={"bg-gray-700"}
        percentage="70%"
      />

      <SkillBar
        title="Figma, PhotoShop"
        width={"w-11/12"}
        barColor={"bg-gray-700"}
        percentage="90%"
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
