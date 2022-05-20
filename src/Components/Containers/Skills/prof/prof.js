import React from 'react';

import SkillBar from '../skillBar';

 const Prof = () => {
  return (
    <div className="flex-1 text-lg">
      <p className=" font-bold mb-3 text-xl">Professional Skills</p>

      <SkillBar
        title="Professionalism"
        width={"w-11/12"}
        barColor={"bg-[#614f45]"}
        percentage="90%"
      />
      <SkillBar
        title="Communication"
        width={"w-10/12"}
        barColor={"bg-[#614f45]"}
        percentage="80%"
      />
      <SkillBar
        title="Creativity"
        width={"w-12/12"}
        barColor={"bg-[#614f45]"}
        percentage="100%"
      />
      <SkillBar
        title="Attentiveness"
        width={"w-11/12"}
        barColor={"bg-[#614f45]"}
        percentage="90%"
      />
      <SkillBar
        title="Learning Rate"
        width={"w-10/12"}
        barColor={"bg-[#614f45]"}
        percentage="80%"
      />
      <SkillBar
        title="Productivity"
        width={"w-11/12"}
        barColor={"bg-[#614f45]"}
        percentage="90%"
      />
    </div>
  );
}

export default Prof;
