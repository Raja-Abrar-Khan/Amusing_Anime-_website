import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const SingleAnime = () => {
  const { id } = useParams();
  const [topanime, setTopAnime] = useState([]);
  const [topanimeep, setTopAnimeEp] = useState([]);
  const [topanimeimages, setTopAnimeimages] = useState([]);
  const [showmore, setShowMore] = useState(false);
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
    async function topAnimeepisodesFetchData() {
      try {
        const topanimeData = await fetch(
          `https://api.jikan.moe/v4/anime/${id}/episodes`
        );
        const data = await topanimeData.json();
        console.log(data.data);
        setTopAnimeEp(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    async function topAnimeimagesFetchData() {
      try {
        const topanimeData = await fetch(
          `https://api.jikan.moe/v4/anime/${id}/reviews`
        );
        const data = await topanimeData.json();
        console.log(data.data);
        setTopAnimeimages(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    topAnimeFetchData();
    topAnimeepisodesFetchData();
    topAnimeimagesFetchData();
  }, [id]);
  return (
    <>
      <div className="anime-details flex flex-col justify-center items-center ">
        <div className="anime-details-1 flex flex-row justify-evenly items-center w-11/12 my-5">
          <div className="animeinfo flex flex-col justify-start items-start w-2/4 gap-3">
            <h1 className="text-7xl details-heading">{topanime?.title}</h1>
            <p className="text-xl">
              <Link
                className="text-7xl"
                target="_blank"
                to={topanime.trailer?.url}
              >
                <FaPlay />
              </Link>
            </p>
            <p className="text-xl">{topanime?.title_japanese}</p>
            <p className="text-xl">Episodes-{topanime?.episodes}</p>
            <p className="text-xl">{topanime?.season}</p>
            <p className="text-xl">
              {showmore
                ? topanime?.synopsis
                : `${topanime.synopsis?.substring(0, 100)}`}
            </p>
            <button
              className="readmore text-2xl"
              onClick={() => setShowMore(!showmore)}
            >
              {showmore ? "Readless" : "Readmore"}
            </button>
          </div>
          <div className="animeimage">
            <img
              className="details-image"
              src={topanime.images?.jpg.large_image_url}
              alt={topanime.images?.jpg.large_image_url}
            />
          </div>
        </div>
        <h1 style={{ color: "white", backgroundColor:"blueviolet" }} className="text-4xl mt-3 p-3">
          Episodes
        </h1>
        <div className="anime-details-2 flex flex-row justify-start items-start w-11/12 my-5 gap-3 flex-wrap">
          {topanimeep.map((episodes, index) => {
            return (
              <Link to={episodes?.url} target="_blank">
                <li key={index} className="episodes text-3xl">
                  {" "}
                  {episodes.mal_id}{" "}
                </li>
              </Link>
            );
          })}
        </div>
        <h1 style={{ color: "white", backgroundColor:"blueviolet" }} className="text-4xl mt-3 p-3">
          Reviews
        </h1>
        <div className="anime-details-3 flex flex-row justify-start items-start w-11/12 my-5 gap-6 flex-wrap">
          {topanimeimages.map((reviews, index) => {
            return (
              <div className="review ">
                <div className="name">
                  <h1 className="text-2xl" style={{color:"blueviolet"}}> {reviews.user?.username} </h1>
                </div>
                <div className="review-content px-3">
                  <p> {reviews.review?.substring(0, 400)} </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SingleAnime;
