import React from "react";
import DetResume from "./detResume";

import { FaUniversity, FaLocationArrow, FaClock } from "react-icons/fa";

const ResumeSection = (props) => {
  return (
    <div className="my-6   flex flex-col ">
      <div className="">
        <p className=" text-lg text-gray-500 font-semibold">{props.title}</p>
        <DetResume
          text={props.subTitle}
          icon={<FaUniversity className="mt-1" />}
        />
        <DetResume
          text={props.location}
          icon={<FaLocationArrow className="mt-1" />}
        />
        <DetResume text={props.time} icon={<FaClock className="mt-1" />} />
      </div>
    </div>
  );
};

export default ResumeSection;
