import React, { useState, useEffect } from "react";
import AnimeCard from "./AnimeCard";
const Home = () => {
  const [animeName, setAnimeName] = useState("");
  const [topanime, setTopAnime] = useState([]);
  const [filtertopanime, setFilterTopAnime] = useState([]);
  const [clicked, setClicked] = useState("false");
  const animelist = topanime.map((anime, k) => (
    <AnimeCard anime={anime} key={k} />
  ));
  console.log(animelist);
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
          `https://api.jikan.moe/v4/top/anime?filter=bypopularity`
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
          class=" bg-white h-10 px-5 pr-10 rounded-fullfocus:outline-none focus:shadow-outline-purple text-2xl"
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
      {/* <div className="anime-list flex flex-row justify-center items-center flex-wrap gap-3 mb-6">
        {clicked === "false"
          ? topanime.map((list, index) => {
              return (
                <div
                  onClick={handleNavigate}
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
                    <p>{list.title_japanese}</p>
                    <p>{list.rating}</p>
                    <p>{list.duration}</p>
                    <p className="text-gray-700">{list.mal_id}</p>
                  </div>
                </div>
              );
            })
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
      </div> */}
    </>
  );
};

export default Home;
