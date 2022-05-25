import React from 'react';
import MyPDF from './sarkodie_cv.pdf'


 const DownLoad = () => {
  return (
    <a
      href={MyPDF}
      className="inline-block py-3 px-5 md:py-5 md:px-8 text-lg md:text-xl font-bold bg-[#e2c647] text-black hover:text-white border border-[#e2c647] hover:bg-transparent mt-4 lg:mt-0"
    >
      Download CV
    </a>
  );
}

export default DownLoad;
