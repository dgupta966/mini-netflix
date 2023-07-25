import { useState, useEffect } from "react";
import { COMMON_URL, API_KEY } from "../components/constants";

const useMovieDetails = (id) => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getMovieData();
  }, []);

  const getMovieData = async () => {
    const data = await fetch(`${COMMON_URL}?i=${id}&apikey=${API_KEY}`);
    const json = await data.json();
    setMovie(json);
  };

  return movie;
};

export default useMovieDetails;
