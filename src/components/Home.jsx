import React from "react";
import { useAPI } from "../Context";
const Home = () => {
  const { anime } = useAPI();
  return (
    <>
        <div className="anime-list flex flex-row justify-center items-center flex-wrap gap-3 mb-6">
          {anime.map((list, index) => {
            return (
              /* <div className="max-w-sm rounded overflow-hidden shadow-lg anime-card">
                <img
                  className="w-full h-80 object-cover"
                  src={list.images.jpg.image_url}
                  alt={list.images.jpg.image_url}
                />
                <div className="p-6">
                  <div className="font-bold text-xl mb-2">{list.title}</div>
                  <p className="text-gray-700">{list.title_japanese}</p>
                  <p className="text-gray-700">{list.rating}</p>
                  <p className="text-gray-700">{list.duration}</p>
                  <p className="text-gray-700">
                    {list.synopsis.substr(0, 100)}
                  </p>
                </div>
              </div> */

              <div className=" rounded-lg overflow-hidden  anime-card">
                <img
                  className="w-full h-80 object-cover object-center"
                  src={list.images.jpg.image_url}
                  alt={list.images.jpg.image_url}
                />
                <div className="p-3 card-content">
                  <h2 className="text-2xl font-bold mb-2"> {list.title} </h2>
                  <p className="text-gray-700">{list.title_japanese}</p>
                  <p className="text-gray-700">{list.rating}</p>
                  <p className="text-gray-700">{list.duration}</p>
                  <p className="text-gray-700">
                    {list.synopsis.substr(0, 100)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
    </>
  );
};

export default Home;
