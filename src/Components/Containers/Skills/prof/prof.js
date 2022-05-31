import React from 'react';

import SkillBar from '../skillBar';


 const Prof = () => {
  return (
    <div className="flex-1 text-lg">
      <p className=" text-[#e2c647] mb-5 md:mb-10 font-semibold md:text-center text-xl">
        Professional Skills
      </p>

      <SkillBar
        title="Communication"
        width={"w-11/12"}
        barColor={"bg-[#614f45]"}
        percentage="90%"
      />
      <SkillBar
        title="Teamwork"
        width={"w-10/12"}
        barColor={"bg-[#614f45]"}
        percentage="80%"
      />
      <SkillBar
        title="Creativity"
        width={"w-11/12"}
        barColor={"bg-[#614f45]"}
        percentage="90%"
      />
      <SkillBar
        title="Problem-Solving"
        width={"w-11/12"}
        barColor={"bg-[#614f45]"}
        percentage="90%"
      />
      <SkillBar
        title="Leadership"
        width={"w-10/12"}
        barColor={"bg-[#614f45]"}
        percentage="80%"
      />
      <SkillBar
        title="Attention To Details"
        width={"w-11/12"}
        barColor={"bg-[#614f45]"}
        percentage="90%"
      />
    </div>
  );
}

export default Prof;
