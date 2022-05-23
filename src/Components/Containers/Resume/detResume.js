import React from 'react'

 const DetResume = props => {
  return (
   
      <div className="flex text-[#6d6d6d] mt-3">
        {props.icon}
        <p className="mx-3">{props.text}</p>
      </div>
  );
}

export default DetResume;
