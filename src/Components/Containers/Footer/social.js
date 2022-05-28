import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Social = () => {
  const github = "https://github.com/AbrantepaSark";

  return (
    <div className="flex justify-center space-x-3 ">
      <span className=" bg-[#33343c]  rounded-full p-3  mb-2">
        <a
          href="https://www.linkedin.com/in/daniel-nyarko-sarkodie-5a6978205/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="h-7 w-7 text-black" />
        </a>
      </span>
      <span className="inline-block bg-[#33343c]  rounded-full p-3  mr-2 mb-2">
        <Link
          to="https://twitter.com/AbrantepaSark"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="h-7 w-7 text-black" />
        </Link>
      </span>
      <span className="inline-block bg-[#33343c]  rounded-full p-3  mr-2 mb-2">
        <Link
          to={{ pathname: github }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-7 w-7 text-black" />
        </Link>
      </span>
    </div>
  );
}

export default Social;
