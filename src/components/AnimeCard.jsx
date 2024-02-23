import React from "react";
import { useNavigate } from "react-router-dom";
const AnimeCard = ({ anime }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    const animeid = anime.mal_id;
    console.log(animeid);
    // console.log(mal_id);
    navigate(`/singleanime/${animeid}`);
  };
  return (
    <>
      <div
        className=" rounded-lg overflow-hidden  anime-card "
        onClick={handleNavigate}
      >
        <img
          className="w-full h-80 object-cover object-center"
          src={anime.images.jpg.image_url}
          alt={anime.images.jpg.image_url}
        />
        <div className="p-3 card-content">
          <h2 className="text-2xl font-bold mb-2"> {anime.title} </h2>
          <p className="text-gray-700">{anime.title_japanese}</p>
          <p className="text-gray-700">{anime.rating}</p>
          <p className="text-gray-700">{anime.duration}</p>
        </div>
      </div>
    </>
  );
};

export default AnimeCard;
