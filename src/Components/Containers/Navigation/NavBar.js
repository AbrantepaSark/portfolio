import React, { useState } from "react";

//import NavItem from "./Nav_item/NavItem";
import myLogo from './port_logo.png';

const NavBar = () => {
    const [toggle, setToggle] = useState(false);

    const toggleHandler = () => {
      return setToggle(!toggle);
    }


    return (
      // <div className="container-none bg-white drop-shadow-md">
      //   <div className="flex justify-between items-center lg:px-20 p-3 md:p-0">
      //     <a className=" font-bold text-xl lg:text-2xl" href="/">
      //       SARK
      //     </a>

      //     <div className="block lg:hidden">
      //       <button className="flex items-center px-3   text-gray-500  hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
      //         <svg
      //           className="fill-current h-5 w-5"
      //           viewBox="0 0 20 20"
      //           xmlns="http://www.w3.org/2000/svg"
      //         >
      //           <title>Menu</title>
      //           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      //         </svg>
      //       </button>
      //     </div>
      //     <div className="hidden lg:block">
      //       <ul className="inline-flex ">
      //         <NavItem link="/">Home</NavItem>
      //         <NavItem link="/">About</NavItem>
      //         <NavItem link="/">Portfolio</NavItem>
      //         <NavItem link="/">Contact</NavItem>
      //       </ul>
      //     </div>
      //   </div>
      // </div>

      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          
          <span className="font-semibold text-xl tracking-tight">SARK</span>
        </div>
        <div className=" lg:hidden">
          <button
            onClick={toggleHandler}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
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
            <a
              href="/responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Docs
            </a>
            <a
              href="/responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Examples
            </a>
            <a
              href="/responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Blog
            </a>
          </div>
          <div>
            <a
              href="/"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
    );
}

export default NavBar;