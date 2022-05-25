import React from 'react';

const Interest = (props) => {
  return (
    <div className="flex flex-col items-center justify-center text-white  rounded-sm h-28 w-28 bg-[#292a2d] ">
      {props.icon}
      <p className="mt-2">{props.text}</p>
    </div>
  );
}

export default Interest;
