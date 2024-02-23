import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const SingleAnime = () => {
  const { id } = useParams();
  const [topanime, setTopAnime] = useState([]);
  useEffect(() => {
    async function topAnimeFetchData() {
      try {
        const topanimeData = await fetch(
          `https://api.jikan.moe/v4/anime/${id}`
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
      <div className="anime-details flex flex-col justify-center items-center ">
        <div className="anime-details-1 flex flex-row justify-evenly items-center w-11/12 my-5">
          <div className="animeinfo flex flex-col justify-start items-start w-2/4 gap-3">
            <h1 className="text-7xl details-heading">{topanime?.title}</h1>
            <p className="text-xl">{topanime?.title_japanese}</p>
            <p className="text-xl">Episodes-{topanime?.episodes}</p>
            {/* <p className="text-xl">{topanime.aired.from}</p> */}
            <p className="text-xl">{topanime?.season}</p>
            <p className="text-xl">{topanime?.synopsis}</p>
          </div>
          <div className="animeimage">
            <img
              className="details-image"
              // src={topanime.images?.jpg.large_image_url}
              // alt={topanime.images?.jpg.large_image_url}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleAnime;
