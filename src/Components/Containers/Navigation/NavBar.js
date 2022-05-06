import React from "react";

import NavItem from "./Nav_item/NavItem";
import myLogo from './port_logo.png';

const NavBar = () => {
    
    return (
      <div className="container-none bg-white drop-shadow-md">
        <div className="flex justify-between items-center lg:px-20 sm:px-6">
          {/* <a class=" font-normal text-xl lg:text-2xl" href="/">
            Daniel
          </a> */}
          <img className=" h-16" src={myLogo} alt="" />
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div class="hidden lg:block">
            <ul class="inline-flex ">
              <NavItem link="/">Home</NavItem>
              <NavItem link="/">About</NavItem>
              <NavItem link="/">Portfolio</NavItem>
              <NavItem link="/">Contact</NavItem>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default NavBar;