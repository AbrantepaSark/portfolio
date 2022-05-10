import React from 'react'

import Tech from './tech/tech';
import Prof from './prof/prof';
import Header from '../Header/header';

 const Skills = () => {
  return (
    <div className="py-10 px-6 lg:py-10 lg:px-28">
      <Header text="Skills" />
      <div className="flex">
        <Prof />
        <Tech />
      </div>
    </div>
  );
}

export default Skills;
