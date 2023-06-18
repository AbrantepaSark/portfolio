import React from "react";

const SingleContact = (props) => {
  return (
    <div className=" container p-5 w-80 shadow-md">
      <div className="flex flex-row gap-x-3 flex-grow md:justify-center">
        <div className="text-gray-500">{props.icon}</div>
        <div>
          <p className="text-left text-lg text-gray-500 font-medium">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleContact;
