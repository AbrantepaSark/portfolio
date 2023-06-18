import React from "react";
import MyPDF from "./sarkodie_cv.pdf";

const DownLoad = () => {
  return (
    <a
      href={MyPDF}
      className="inline-block py-3 md:py-4 px-12 md:px-20 text-lg md:text-xl font-medium bg-gradient-to-br from-yellow-400 to-blue-600 hover:bg-gradient-to-bl text-black hover:text-white rounded-full "
    >
      Download CV
    </a>
  );
};

export default DownLoad;
