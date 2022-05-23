import React from 'react'

const Personal = props => {
  return (
    <div className="flex flex-row text-[#6d6d6d] py-3 ">
      <div className="flex-1 flex-row">
        <div className="flex">
          {props.icon}
          <p className="mx-3 font-semibold">{props.title + " :"}</p>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-left">{props.text}</p>
      </div>
    </div>
  );
}


export default Personal;
