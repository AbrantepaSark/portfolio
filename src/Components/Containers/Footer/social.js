import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex justify-center ">
      <span className="inline-block bg-white shadow-md rounded-full p-3  mr-2 mb-2">
        <Link to="https://www.linkedin.com/in/daniel-nyarko-sarkodie-5a6978205/">
          <FaLinkedin className="h-7 w-7 text-black" />
        </Link>
      </span>
      <span className="inline-block bg-white shadow-md rounded-full p-3  mr-2 mb-2">
        <Link to="https://twitter.com/AbrantepaSark">
          <FaTwitter className="h-7 w-7 text-blue-900" />
        </Link>
      </span>
      <span className="inline-block bg-white shadow-md rounded-full p-3  mr-2 mb-2">
        <Link to="https://github.com/AbrantepaSark">
          <FaGithub className="h-7 w-7 text-black" />
        </Link>
      </span>
      <span className="inline-block bg-white shadow-md rounded-full p-3  mr-2 mb-2"></span>
    </div>
  );
}

export default Social;
