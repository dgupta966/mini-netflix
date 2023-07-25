import { Link } from "react-router-dom";

const MovieCard = ({ imdbID, Title, Year, Poster }) => {
  return (
    <Link to={"movie/" + imdbID} key={imdbID}>
      <div className="movie-card">
        <div className="movie-card__name" title={Title}>
          {Title}
        </div>
        <img className="movie-card__img" src={Poster} alt={Title} />
        <div className="movie-card__year">{Year}</div>
      </div>
    </Link>
  );
};

export default MovieCard;
