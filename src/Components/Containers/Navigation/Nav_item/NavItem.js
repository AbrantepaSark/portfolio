import React from "react";

const NavItem = (props) => (
  // <li className="p-5 hover:bg-slate-500  hover:text-white hover:m-0">
  //   <a href={props.link}>{props.children}</a>
  // </li>
  <p
    className="block mt-4 lg:inline-block lg:mt-0 hover:font-bold  text-gray-900 lg:hover:bg-gray-800 lg:hover:text-white lg:py-5 lg:px-7 py-2 px-0 "
  >
    {props.children}
  </p>
);

export default NavItem;