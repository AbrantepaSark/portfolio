import React from 'react';
import MyPDF from './sarkodie_cv.pdf'


 const DownLoad = () => {
  return (
    <a
      href={MyPDF}
      className="inline-block px-4 py-3 leading-none border rounded text-[#1d2124] border-[#1d2124] hover:border-transparent hover:text-white hover:bg-[#6d6d6d] mt-4 lg:mt-0"
    >
      Download CV
    </a>
  );
}

export default DownLoad;
