import React, { useContext, useState, useEffect, createContext } from "react";
// import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [anime, setAnime] = useState([]);
  useEffect(() => {
    async function fetchData() {
    try {
        const animeData = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity`);
        const data = await animeData.json();
        console.log(data.data)
        setAnime(data.data)
    } catch (error) {
        console.log(error)
    }
    }
    fetchData();
  }, []);
  return (
    <APIContext.Provider
      value={{
        anime
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
