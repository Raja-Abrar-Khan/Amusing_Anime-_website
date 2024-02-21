import React from "react";
import { useState, useEffect } from "react";
const Upcoming = () => {
  const [upcomimg, setUpcomimg] = useState([]);
  useEffect(() => {
    async function upComimgFetchData() {
      try {
        const upcomimganimeData = await fetch(
          `https://api.jikan.moe/v4/top/anime?filter=upcoming`
        );
        const data = await upcomimganimeData.json();
        console.log(data.data);
        setUpcomimg(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    upComimgFetchData();
  }, []);
  return (
    <>
      <div className="anime-list flex flex-row justify-center items-center flex-wrap gap-3 mb-6">
        {upcomimg.map((list, index) => {
          return (
            <div className=" rounded-lg overflow-hidden anime-card  ">
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
                <p className="text-gray-700">{list.season}</p>
                {/* <p className="text-gray-700">{list.synopsis.substr(0, 10)}</p> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Upcoming;
