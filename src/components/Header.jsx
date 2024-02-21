import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header flex flex-row justify-evenly items-center gap-8 my-8 title">
        <h1 className=" text-4xl  text-center py-3">
          <Link to="/">Amusing Amazon Anime</Link>
        </h1>
        <input
          type="text"
          placeholder="Search..."
          class="bg-white h-10 px-5 pr-10 rounded-fullfocus:outline-none focus:shadow-outline-purple w-64 text-2xl"
        />
        <div className=" text-2xl">
          <Link to="/upcomimg">Upcoming</Link>
        </div>
        <div className=" text-2xl">
          <Link to="/airing">Airing</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
