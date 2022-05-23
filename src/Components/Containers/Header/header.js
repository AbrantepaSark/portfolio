import React from 'react'

const Header = props => {
  return (
    <div>
      <h2 className="font-bold font-serif text-[#2d5596] text-3xl">
        {props.text}
      </h2>
      <div className="container w-12 h-1 bg-[#2d5596] mb-5"></div>
    </div>
  );
}


export default Header;
