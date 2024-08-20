import React, { useState, useEffect } from "react";
import AnimeCard from "./AnimeCard";

const Airing = () => {
  const [animeName, setAnimeName] = useState("");
  const [topanime, setTopAnime] = useState([]);
  const [filtertopanime, setFilterTopAnime] = useState([]);
  const [clicked, setClicked] = useState("false");
  const animelist = topanime.map((anime, k) => (
    <AnimeCard anime={anime} key={k} />
  ));

  const handleChange = (e) => {
    const inputanime = e.target.value;
    setAnimeName(inputanime);
  };
  const showAnime = async () => {
    setClicked("true");
    try {
      const topanimeData = await fetch(
        `https://api.jikan.moe/v4/anime?q=${animeName}&order_by=popularity&sort=asc&sfw`
      );
      const data = await topanimeData.json();
      console.log(data.data);
      setFilterTopAnime(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    async function topAnimeFetchData() {
      try {
        const topanimeData = await fetch(
          `https://api.jikan.moe/v4/top/anime?filter=airing`
        );
        const data = await topanimeData.json();
        console.log(data.data);
        setTopAnime(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    topAnimeFetchData();
  }, []);
  return (
    <>
      <div className="input flex flex-row justify-center items-center pb-9 gap-5">
        <input
          onChange={handleChange}
          value={animeName}
          type="text"
          id="search"
          placeholder="Search....."
          required
          class=" bg-black h-10 px-5 pr-10 rounded-fullfocus:outline-none focus:shadow-outline-purple text-2xl"
        />
        <button onClick={showAnime} className="text-3xl button">
          Search
        </button>
      </div>
      <div className="anime-list flex flex-row justify-center items-center flex-wrap gap-3 mb-6">
        {clicked === "false"
          ? animelist
          : filtertopanime.map((list, index) => {
              return (
                <div
                  className=" rounded-lg overflow-hidden  anime-card "
                  key={index}
                >
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
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default Airing;

// import React from "react";
// import { useState, useEffect } from "react";
// const Airing = () => {
//   const [upcomimg, setUpcomimg] = useState([]);
//   useEffect(() => {
//     async function upComimgFetchData() {
//       try {
//         const upcomimganimeData = await fetch(
//           `https://api.jikan.moe/v4/top/anime?filter=airing`
//         );
//         const data = await upcomimganimeData.json();
//         console.log(data.data);
//         setUpcomimg(data.data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     upComimgFetchData();
//   }, []);
//   return (
//     <>
//       <div className="input flex flex-row justify-center items-center pb-9">
//         <input
//           type="text"
//           placeholder="Search..."
//           class=" bg-white h-10 px-5 pr-10 rounded-fullfocus:outline-none focus:shadow-outline-purple text-2xl"
//         />
//       </div>
//       <div className="anime-list flex flex-row justify-center items-center flex-wrap gap-3 mb-6">
//         {upcomimg.map((list, index) => {
//           return (
//             <div className=" rounded-lg overflow-hidden   anime-card " key={index}>
//               <img
//                 className="w-full h-80 object-cover object-center"
//                 src={list.images.jpg.image_url}
//                 alt={list.images.jpg.image_url}
//               />
//               <div className="p-3 card-content">
//                 <h2 className="text-2xl font-bold mb-2"> {list.title} </h2>
//                 <p className="text-gray-700">{list.title_japanese}</p>
//                 <p className="text-gray-700">{list.rating}</p>
//                 <p className="text-gray-700">{list.duration}</p>
//                 <p className="text-gray-700">{list.season}</p>
//                 {/* <p className="text-gray-700">{list.synopsis.substr(0, 10)}</p> */}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Airing;
