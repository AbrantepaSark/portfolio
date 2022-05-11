import React from 'react';

import SkillBar from '../skillBar';

 const Prof = () => {
  return (
    <div className="flex-1">
      <p className=" font-semibold text-lg mb-3 ">Professional Skills</p>

      <SkillBar
        title="Professionalism"
        width={"w-11/12"}
        barColor={"bg-stone-700"}
        percentage="90%"
      />
      <SkillBar
        title="Communication"
        width={"w-10/12"}
        barColor={"bg-stone-700"}
        percentage="80%"
      />
      <SkillBar
        title="Creativity"
        width={"w-12/12"}
        barColor={"bg-stone-700"}
        percentage="100%"
      />
      <SkillBar
        title="Attentiveness"
        width={"w-11/12"}
        barColor={"bg-stone-700"}
        percentage="90%"
      />
      <SkillBar
        title="Learning Rate"
        width={"w-10/12"}
        barColor={"bg-stone-700"}
        percentage="80%"
      />
      <SkillBar
        title="Productivity"
        width={"w-11/12"}
        barColor={"bg-stone-700"}
        percentage="90%"
      />
    </div>
  );
}

export default Prof;
