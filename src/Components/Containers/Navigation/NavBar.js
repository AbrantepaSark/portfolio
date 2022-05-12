import React, { useState } from "react";

import NavItem from "./Nav_item/NavItem";
import DownLoad from "./DownloadBtn/button";
//import myLogo from './port_logo.png';

const NavBar = props => {
    const [toggle, setToggle] = useState(true);

    const toggleHandler = () => {
      return setToggle(!toggle);
    }

    return (
      <nav
        className={`flex items-center justify-between flex-wrap bg-white py-4 px-7 lg:px-28 lg:py-0`}
      >
        <div className="flex items-center flex-shrink-0 text-blue-900  mr-10">
          <span className="font-semibold text-2xl tracking-tight">SARK</span>
        </div>
        <div className=" lg:hidden">
          <button
            onClick={toggleHandler}
            className="flex items-center px-3 py-2 border rounded text-gray-900  border-gray-900"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full ${
            toggle && "hidden"
          } flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow">
            <NavItem onClick={() => props.onScroll(props.home.current)}>
              Home
            </NavItem>
            <div>
              <NavItem onClick={() => props.scrollTo(props.about.current)}>
                About
              </NavItem>
            </div>
            <NavItem onClick={() => props.scrollTo("portfolio")}>
              Portfolio
            </NavItem>
            <NavItem onClick={() => props.scrollTo("contact")}>Contact</NavItem>
          </div>
          <div>
            <DownLoad />
          </div>
        </div>
      </nav>
    );
}

export default NavBar;