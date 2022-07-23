import React from "react";

import Interest from "./interest";

import { FaMusic, FaBook, FaGamepad } from "react-icons/fa";

const Info = () => {
  return (
    <div className="flex-1 text-lg">
      <p className="text-xl font-light text-justify text-white">
        I am a hardworking and reliable Developer with strong ability in user
        interface design and development of web applications. I am an Organized
        and motivated developer eager to apply acquired skills in various
        environments, ready to learn and contribute to team success.
      </p>
      <div className=" mt-8 md:mt-16">
        <p className=" text-white mb-3 font-semibold text-center text-xl">
          My Interests
        </p>
        <div className="flex  justify-evenly mt-4">
          <Interest
            text="Music"
            icon={<FaMusic className="h-7 w-7 text-[#67696e]" />}
          />
          <Interest
            text="Games"
            icon={<FaGamepad className="h-7 w-7 text-[#67696e]" />}
          />
          <Interest
            text="Reading"
            icon={<FaBook className="h-7 w-7 text-[#67696e]" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
