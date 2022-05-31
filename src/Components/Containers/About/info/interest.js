import React from 'react';

const Interest = (props) => {
  return (
    <div className="flex flex-col items-center justify-center text-white  rounded-sm h-24 w-24 md:h-28 md:w-28 bg-[#38393f] drop-shadow-md ">
      {props.icon}
      <p className="mt-2 text-sm md:text-lg">{props.text}</p>
    </div>
  );
}

export default Interest;
