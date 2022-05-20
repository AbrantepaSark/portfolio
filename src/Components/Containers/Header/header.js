import React from 'react'

const Header = props => {
  return (
    <div>
      <h2 className="font-bold font-serif text-[#3e3a37] text-3xl">
        {props.text}
      </h2>
      <div className="container w-12 h-1 bg-[#3e3a37] mb-5"></div>
    </div>
  );
}


export default Header;
