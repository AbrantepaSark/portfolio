import React from 'react'

const Header = props => {
  return (
    <div>
      <h2 className="font-bold font-serif text-[#e2c647] text-2xl md:text-3xl">
        {props.text}
      </h2>
      <div className="container w-12 h-1 bg-[#e2c647] mb-12"></div>
    </div>
  );
}


export default Header;
