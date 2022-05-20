import React from 'react'

import Personal from './personal';

import { FaPhone, FaMailBulk, FaGlobe, FaSearchLocation, FaSuitcase } from "react-icons/fa";

const Details = () => {
  return (
    <div className="lg:pl-16 text-lg">
      <p className=" font-bold mb-3 text-xl">Personal Information</p>
      <ul>
        <li>
          <Personal icon={<FaPhone />} title="Phone" text="+233 548974517" />
        </li>
        <li>
          <Personal
            icon={<FaMailBulk />}
            title="Email"
            text="dsarkodie@gmail.com"
          />
        </li>
        <li>
          <Personal
            icon={<FaGlobe />}
            title="Website"
            text="danielSarkodie.com"
          />
        </li>
        <li>
          <Personal
            icon={<FaSearchLocation />}
            title="Location"
            text="Sunyani, Bono Region"
          />
        </li>
        <li>
          <Personal icon={<FaSuitcase />} title="Job Status" text="Freelance" />
        </li>
      </ul>
    </div>
  );
}

export default Details;
