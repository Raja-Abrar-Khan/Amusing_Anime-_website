import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Genres = () => {
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    async function topAnimeFetchData() {
      try {
        const topanimeData = await fetch(
          `https://api.jikan.moe/v4/genres/anime`
        );
        const data = await topanimeData.json();
        console.log(data.data);
        setGenre(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    topAnimeFetchData();
  }, []);
  return (
    <div className="genre-div flex flex-row justify-center items-center w-full my-5 gap-6 flex-wrap p-7">
      {genre.map((genre, index) => {
        return (
          <div
            className="genres flex flex-row justify-center items-center text-xl"
            key={index}
          >
            <Link to={genre.url} target="_blank">{genre.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
