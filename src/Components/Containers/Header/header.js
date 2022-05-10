import React from 'react'

const Header = props => {
  return (
    <div>
      <h2 className="font-bold font-serif text-cyan-900 text-3xl">{props.text}</h2>
      <div className="container w-12 h-1 bg-black mb-5"></div>
    </div>
  );
}


export default Header;
