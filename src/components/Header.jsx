import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header flex flex-row justify-evenly items-center gap-8 my-8 title">
      <img
      className="logo-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx61GEsZt_UzNlPHL2q7frz-As4moMeRjCj01UlKe2JtwvimBkI0ht82ZkKMCCvehaEdU&usqp=CAU"
        alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx61GEsZt_UzNlPHL2q7frz-As4moMeRjCj01UlKe2JtwvimBkI0ht82ZkKMCCvehaEdU&usqp=CAU"
      />
        <h1 className=" text-4xl  text-center py-3">
          <Link to="/">Amusing Amazon Anime</Link>
        </h1>
        <div className=" text-2xl">
          <Link to="/upcomimg">Upcoming</Link>
        </div>
        <div className=" text-2xl">
          <Link to="/airing">Airing</Link>
        </div>
        <div className=" text-2xl">
          <Link to="/genre">Genre</Link>
        </div>
        <div className=" text-2xl">
          <Link to="/manga">Manga</Link>
        </div>
        <div className=" text-2xl">
          <Link to="/magazines">Magazines</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
