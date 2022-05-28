import React from 'react';

//import Details from '../About/porsonal/details';
import Social from './social';

const Footer = () => {
  return (
    <div className="py-16 px-6 lg:py-20 lg:px-28 bg-[#38393f]">
      <div className="text-white">
        <p className="text-center italic mb-5 text-lg font-light">Lets get connected</p>
        <Social />
        <p className="text-center mt-10 text-sm">
          CopyRight @2022 Daniel Nyarko Sarkodie
        </p>
      </div>
    </div>
  );
}

export default Footer;
