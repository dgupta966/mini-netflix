import MovieCard from "./MovieCard";
import useMovies from "../hook/useMovies";

const Body = () => {
  const movies = useMovies();

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
