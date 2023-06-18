import React from "react";

const Header = (props) => {
  return (
    <div>
      <h2 className="font-bold font-['Roboto'] text-[#120f467] text-3xl md:text-4xl lg:text-5xl">
        {props.text}
      </h2>
      <div className="container w-12 h-1 bg-[#120f46] mb-12"></div>
    </div>
  );
};

export default Header;
