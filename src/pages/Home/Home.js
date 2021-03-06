import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import FilterPanel from "../../components/FilterPanel";
import RocketList from "../../components/RocketList";

const Home = () => {
  const [rocket, setRocket] = useState("");

  const searchRocket = (e) => {
    const value = e.target.value;
    setRocket(value);
    console.log(value);
  };
  return (
    <>
      <Navbar searchRocket={searchRocket} rocket={rocket} />
      <FilterPanel />
      <div className="pt-16 md:pt-20 pr-2 pl-2 md:pr-8 md:pl-28 lg:pl-80 bg-gray-50">
        <div className="pt-2 md:pt-5">
          <RocketList rocket={rocket} />
        </div>
      </div>
    </>
  );
};

export default Home;
