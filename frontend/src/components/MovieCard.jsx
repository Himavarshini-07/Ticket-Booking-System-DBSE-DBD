import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div className="movie-card">
      <div className="movie-poster-wrapper">
        <img
          src={movie.poster}
          alt={movie.title}
          className="movie-poster"
        />

        <div className="movie-rating">
          ⭐ {movie.rating}
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <p className="movie-genre">
          {movie.genre}
        </p>

        <div className="movie-details">
          <span>⏱ {movie.duration}</span>
          <span>📅 {movie.language}</span>
        </div>

        <button
          className="book-btn"
          onClick={() =>
            navigate(`/booking/${movie.id}`)
          }
        >
          Book Tickets →
        </button>
      </div>
    </div>
  );
}

export default MovieCard;