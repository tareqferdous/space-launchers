import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="fixed left-0 top-0 bg-gray-800 md:w-24 lg:w-72 h-full shadow-md z-10 hidden md:block">
        <div className="text-white font-bold text-base uppercase text-center py-5 bg-gray-900">
          Space-launcher
        </div>
      </div>
    </>
  );
};

export default Sidebar;
