import React from 'react'

const Personal = props => {
  return (
      <div className="flex flex-row py-3 px-5">
        <div className="flex-1 flex-row">
          <div className='flex text-blue-900'>
              {props.icon}
              <p className='mx-3 font-semibold'>{props.title + " :"}</p>
          </div>
        </div>
        <div className="flex-1">
          <p>{props.text}</p>
        </div>
      </div>
    
  );
}

export default Personal;
