import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex justify-center ">
      <span className="inline-block bg-white shadow-md rounded-full p-3  mr-2 mb-2">
        <FaLinkedin className="h-6 w-6 text-black" />
      </span>
      <span className="inline-block bg-white shadow-md rounded-full p-3  mr-2 mb-2">
        <FaTwitter className="h-6 w-6 text-blue-900" />
      </span>
      <span className="inline-block bg-white shadow-md rounded-full p-3  mr-2 mb-2">
        <FaGithub className="h-6 w-6 text-black" />
      </span>
      <span className="inline-block bg-white shadow-md rounded-full p-3  mr-2 mb-2">
        <FaFacebook className="h-6 w-6 text-blue-900" />
      </span>
    </div>
  );
}

export default Social;
