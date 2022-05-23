import React from 'react'
import DetResume from './detResume';

import { FaUniversity, FaLocationArrow, FaClock } from "react-icons/fa";

 const ResumeSection = props => {
  return (
    <div className="mt-2 md:ml-24">
      <p className=" text-[#0c1d5f]">{props.title}</p>
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
  );
}

export default ResumeSection;
