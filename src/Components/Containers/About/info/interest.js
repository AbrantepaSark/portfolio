import React from 'react';

const Interest = (props) => {
  return (
    <div className="flex flex-col items-center justify-center  rounded-sm h-28 w-28 bg-white drop-shadow-md">
      
      {props.icon}
      <p className='mt-2'>{props.text}</p>
    </div>
  );
}

export default Interest;