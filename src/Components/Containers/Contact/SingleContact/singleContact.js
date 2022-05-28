import React from 'react'

 const SingleContact = props => {
  return (
    <div className="bg-[#38393f] container p-5 w-72 shadow-md">
      <div className="flex flex-row gap-x-3 flex-grow justify-center">
        <div className="text-white">{props.icon}</div>
        <div>
          <p className="text-left text-[#e2c647] font-medium">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleContact;
