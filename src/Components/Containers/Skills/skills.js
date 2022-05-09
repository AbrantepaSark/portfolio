import React from 'react'

import Tech from './tech/tech';

 const Skills = () => {
  return (
    <div className="lg:py-12">
      <h2 className="font-bold font-serif text-cyan-900 text-3xl">Skills</h2>
      <div className="container w-12 h-1 bg-black mb-5"></div>
      <div className="flex">
        <Tech />
        <Tech />
      </div>
    </div>
  );
}

export default Skills;
