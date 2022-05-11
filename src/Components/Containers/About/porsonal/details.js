import React from 'react'

import Personal from './personal';

import { FaPhone, FaMailBulk, FaGlobe, FaSearchLocation, FaSuitcase } from "react-icons/fa";

const Details = () => {
  return (
    <div className="lg:pl-16">
      <p className=" font-semibold text-lg mb-3 ">Personal Information</p>
      <ul>
        <li>
          <Personal icon={<FaPhone />} title="Phone" text="+233 548974517" />
        </li>
        <li>
          <Personal
            icon={<FaMailBulk />}
            title="Email"
            text="dsarkodie500@gmail.com"
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
