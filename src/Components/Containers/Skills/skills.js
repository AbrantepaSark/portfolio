import React from 'react'

import Tech from './tech/tech';
import Prof from './prof/prof';
import Header from '../Header/header';

 const Skills = () => {
  return (
    <div className="py-16 px-6 lg:py-20 lg:px-28 bg-[#38393f]">
      <Header text="Skills" />
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
        <Prof />
        <Tech />
      </div>
    </div>
  );
}

export default Skills;
