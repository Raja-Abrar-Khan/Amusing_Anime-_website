import React from "react";
import { useAPI } from "../Context";
const Home = () => {
  const { anime } = useAPI();
  return (
    <>
      <div className="home-container flex flex-col justify-center items-center gap-8 bangers-regular tracking-wider	">
        <h1 className="mt-6 text-4xl title text-center py-3">
          Amusing Amazon Anime
        </h1>
        <div className="header flex flex-row justify-center items-center gap-8">
        <input type="text" placeholder="Search..." class="bg-white h-10 px-5 pr-10 rounded-fullfocus:outline-none focus:shadow-outline-purple w-64 text-2xl"/>
          <div className=" text-2xl">Upcoming</div>
          <div className=" text-2xl">Airing</div>
        </div>
        <div className="anime-list flex flex-row justify-center items-center flex-wrap gap-3 mb-6">
          {anime.map((list, index) => {
            return (
              <div className="bg-white rounded-lg overflow-hidden  max-w-md w-full anime-card">
                <img
                  className="w-full h-80 object-cover object-center"
                  src={list.images.jpg.image_url}
                  alt={list.images.jpg.image_url}
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2"> {list.title} </h2>
                  <p className="text-gray-700">
                   {list.title_japanese}
                  </p>
                  <p className="text-gray-700">
                   {list.rating}
                  </p>
                  {/* <p className="text-gray-700">
                   {list.year}
                  </p> */}
                  <p className="text-gray-700">
                   {list.duration}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
