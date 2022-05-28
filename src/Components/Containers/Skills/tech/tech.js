import React from 'react'

import SkillBar from '../skillBar';

 const Tech = () => {
  return (
    <div className="flex-1 text-lg">
      <p className=" text-[#e2c647] mb-5 md:mb-10 font-semibold md:text-center text-xl">
        Technical Skills
      </p>
      <SkillBar
        title="HTML, CSS, TailwindCSS"
        width={"w-11/12"}
        barColor={"bg-gray-800"}
        percentage="90%"
      />
      <SkillBar
        title="JavaScript"
        width={"w-10/12"}
        barColor={"bg-gray-800"}
        percentage="80%"
      />
      <SkillBar
        title="ReactJS, ExpressJS & NodeJS"
        width={"w-10/12"}
        barColor={"bg-gray-800"}
        percentage="80%"
      />
      <SkillBar
        title="REST API, JSON"
        width={"w-8/12"}
        barColor={"bg-gray-800"}
        percentage="70%"
      />

      <SkillBar
        title="Figma, PhotoShop"
        width={"w-11/12"}
        barColor={"bg-gray-800"}
        percentage="90%"
      />
      <SkillBar
        title="Git"
        width={"w-7/12"}
        barColor={"bg-gray-800"}
        percentage="60%"
      />
    </div>
  );
}

export default Tech;
