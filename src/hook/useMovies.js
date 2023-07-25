import { useState, useEffect } from "react";
import { MOVIES_URL } from "../components/constants";

const useMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieData();
  }, []);

  const getMovieData = async () => {
    const data = await fetch(MOVIES_URL);
    const json = await data.json();
    setMovies(json.Search);
  };

  return movies;
};

export default useMovies;
