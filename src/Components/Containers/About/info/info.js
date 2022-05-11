
import React from 'react'

import Interest from './interest';


import { FaMusic, FaBook, FaGamepad } from "react-icons/fa"

 const Info = () => {
  return (
    <div className="flex-1  ">
      <p className=" text-justify">
        I am{" "}
        <span className="text-teal-900 font-bold">Daniel Nyarko Sarkodie</span>,
        Hardworking and reliable Developer with strong ability in user interface
        design and development of web applications. I am an Organized and
        motivated developer eager to apply acquired skills in various
        environments, ready to learn and contribute to team success.
      </p>
      <div className="mt-5">
        <p className="font-bold   text-lg mb-3 ">My Interests</p>
        <div className="flex  justify-evenly mt-4">
          <Interest
            text="Music"
            icon={<FaMusic className="h-7 w-7 text-blue-500" />}
          />
          <Interest
            text="Games"
            icon={<FaGamepad className="h-7 w-7 text-blue-500" />}
          />
          <Interest
            text="Reading"
            icon={<FaBook className="h-7 w-7 text-blue-500" />}
          />
        </div>
      </div>
    </div>
  );
}


export default Info;