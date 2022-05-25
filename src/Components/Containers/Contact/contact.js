import React from 'react';

import Header from '../Header/header';

const Contact = () => {
  return (
    <div className="py-16 px-6 lg:py-20 lg:px-28 bg-[#33343c]">
      <Header text="Contact" />

      <div className="container drop-shadow-md bg-white p-8 md:m-auto">
        <p className=" text-center italic">Please fill out this field.</p>
        <form className="w-full max-w-lg flex flex-col mx-auto">
          <div className="flex flex-wrap -mx-3 my-5 ">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2">
                Full Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-sm text-gray-900 rounded-md py-3 px-4  leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Enter name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-sm text-gray-700 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="email"
                placeholder="Enter email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2">
                Message
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-100 text-sm text-gray-700  rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                rows="6"
                placeholder="Enter your message"
              />
            </div>
            <button className="bg-[#6d6d6d] hover:bg-[#575656] text-white w-full font-semibold py-2 mx-4 mt-8 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
