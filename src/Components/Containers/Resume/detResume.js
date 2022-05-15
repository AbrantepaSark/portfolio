import React from 'react'

 const DetResume = props => {
  return (
    <div className="mt-3">
      
      <div className="flex text-neutral-600">
        {props.icon}
        <p className="mx-3">{props.text}</p>
      </div>
    </div>
  );
}

export default DetResume;
