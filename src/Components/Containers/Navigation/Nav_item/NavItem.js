import React from "react";

const NavItem = (props) => (
  <li className="p-5 hover:bg-slate-500  hover:text-white hover:m-0">
    <a href={props.link}>{props.children}</a>
  </li>
);

export default NavItem;