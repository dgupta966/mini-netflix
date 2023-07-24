import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Body = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieData();
  }, []);

  const getMovieData = async () => {
    const data = await fetch(
      "https://www.omdbapi.com/?apikey=aaa2f8d2&s=harry"
    );
    const json = await data.json();
    setMovies(json.Search);
    console.log(json);
  };

  if (movies.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie">
      {movies.map((movie) => {
        return <MovieCard key={movie.id} {...movie} />;
      })}
    </div>
  );
};
export default Body;
