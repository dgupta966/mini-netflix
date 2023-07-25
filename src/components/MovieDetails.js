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
          <span className="movie-details__tag">Actors</span> -{" "}
          <span className="movie-details__title">{Actors}</span>
        </div>
        <div>
          <span className="movie-details__tag">Genre -</span>{" "}
          <span className="movie-details__title">{Genre}</span>
        </div>
        <div>
          <span className="movie-details__tag">Language - </span>
          <span className="movie-details__title">{Language}</span>
        </div>
        <div>
          <span className="movie-details__tag">Released -</span>{" "}
          <span className="movie-details__title">{Released}</span>
        </div>
        <div>
          <span className="movie-details__tag">Writer - </span>
          <span className="movie-details__title">{Writer}</span>
        </div>
        <div>
          <span className="movie-details__tag">Year - </span>
          <span className="movie-details__title">{Year}</span>
        </div>
        <div>
          <span className="movie-details__tag">IMDB Rating - </span>
          <span className="movie-details__title">{imdbRating}</span>
        </div>
        <div>
          <span className="movie-details__tag">IMDB Votes -</span>{" "}
          <span className="movie-details__title">{imdbVotes}</span>
        </div>
      </span>
    </div>
  );
};

export default MovieDetails;
