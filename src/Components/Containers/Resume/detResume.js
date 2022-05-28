import React from 'react'

 const DetResume = props => {
  return (
   
      <div className="flex text-white font-light  md:text-lg mt-3">
        {props.icon}
        <p className="mx-3">{props.text}</p>
      </div>
  );
}

export default DetResume;
