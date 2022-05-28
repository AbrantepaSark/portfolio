import React from 'react'
import DetResume from './detResume';

import { FaUniversity, FaLocationArrow, FaClock } from "react-icons/fa";

 const ResumeSection = props => {
  return (
    <div className="my-6 mx-auto container bg-[#33343c] h-2/3 max-w-md md:max-w-md flex flex-col items-center py-8 shadow-md">
      <div className="">
        <p className=" text-lg text-[#e2c647] font-semibold">{props.title}</p>
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
}

export default ResumeSection;
