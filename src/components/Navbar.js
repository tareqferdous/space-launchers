import React, { useState } from "react";

const Navbar = ({ rocket, searchRocket }) => {
  return (
    <>
      <div className="h-12 md:h-16 bg-white shadow-md px-8 fixed w-full top-0 left-0 flex items-center">
        <div className="relative ml-72 text-lg font-bold text-gray-600">
          Let's Search For Rocket!
        </div>
        <div className="ml-auto flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute left-2 top-2 text-gray-400 hidden md:block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            className="block w-80 shadow border-none rounded-xl focus:outline-none py-2 bg-gray-200 text-base text-gray-600 pl-8 pr-2 hidden md:block"
            type="text"
            placeholder="Search Rocket.."
            value={rocket}
            onChange={searchRocket}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
