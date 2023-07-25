import { useParams } from "react-router-dom";
import useMovieDetails from "../hook/useMovieDetails";

const MovieDetails = () => {
  const { id } = useParams();

  const movie = useMovieDetails(id);

  if (!movie) {
    return <div>Loading ...</div>;
  }

  const {
    Title,
    Poster,
    Actors,
    Genre,
    Language,
    Released,
    Writer,
    Year,
    imdbRating,
    imdbVotes,
  } = movie;
  return (
    <div className="movie-details">
      <span>
        <h1 className="movie-details__name" title={Title}>
          {Title}
        </h1>
        <img className="movie-details__img" src={Poster} alt={Title} />

        <div>
          <span className="movie-details__tag">Actors</span> - {Actors}
        </div>
        <div>
          <span className="movie-details__tag">Genre -</span> {Genre}
        </div>
        <div>
          <span className="movie-details__tag">Language - </span>
          {Language}
        </div>
        <div>
          <span className="movie-details__tag">Released -</span> {Released}
        </div>
        <div>
          <span className="movie-details__tag">Writer -</span>
          {Writer}
        </div>
        <div>
          <span className="movie-details__tag">Year - </span>
          {Year}
        </div>
        <div>
          <span className="movie-details__tag">IMDB Rating - </span>
          {imdbRating}
        </div>
        <div>
          <span className="movie-details__tag">IMDB Votes -</span> {imdbVotes}
        </div>
      </span>
    </div>
  );
};

export default MovieDetails;
