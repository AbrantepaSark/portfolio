import React from 'react';

import Details from '../About/porsonal/details';
import Social from './social';

const Footer = () => {
  return (
    <div className="py-16 px-6 lg:py-20 lg:px-28 bg-[#38393f]">
      <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-10">
        <div className="flex-1">
          <p className="font-semibold text-[#0c1d5f]  text-xl mb-3 ">About</p>
          <p className=" text-justify text-[#606365] text-lg">
            I am a hardworking and reliable Developer with strong ability in
            user interface design and development of web applications. I am an
            Organized and motivated developer eager to apply acquired skills in
            various environments, ready to learn and contribute to team success.
          </p>
          <div className="mt-8">
            <Social />
          </div>
        </div>
        <div className="flex-1">
          <Details />
        </div>
      </div>
      <p className="text-center mt-10 text-sm">
        CopyRight @2022 Daniel Nyarko Sarkodie
      </p>
    </div>
  );
}

export default Footer;
