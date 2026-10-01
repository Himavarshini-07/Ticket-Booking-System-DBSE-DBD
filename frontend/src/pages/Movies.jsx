import { useState } from "react";
import MovieCard from "../components/MovieCard";

const movies = [
  {
    id: 1,
    title: "Pushpa 2",
    genre: "Action • Drama",
    duration: "3h 20m",
    language: "Telugu",
    rating: "4.8",
    poster:
      "https://image.tmdb.org/t/p/w500/1y1J0nKfZ0NqXvQ3jL1Vx5bJq8X.jpg",
  },
  {
    id: 2,
    title: "Kalki 2898 AD",
    genre: "Sci-Fi • Action",
    duration: "3h",
    language: "Telugu",
    rating: "4.7",
    poster:
      "https://image.tmdb.org/t/p/w500/6X0X5X8GJ5WZ5H7K8X7J.jpg",
  },
  {
    id: 3,
    title: "RRR",
    genre: "Action • Drama",
    duration: "3h 7m",
    language: "Telugu",
    rating: "4.9",
    poster:
      "https://image.tmdb.org/t/p/w500/nEufeZlyA4m8iQ1.jpg",
  },
  {
    id: 4,
    title: "Devara",
    genre: "Action • Thriller",
    duration: "2h 58m",
    language: "Telugu",
    rating: "4.5",
    poster:
      "https://image.tmdb.org/t/p/w500/7X5X5X5X5X5X.jpg",
  },
  {
    id: 5,
    title: "Salaar",
    genre: "Action",
    duration: "2h 55m",
    language: "Telugu",
    rating: "4.6",
    poster:
      "https://image.tmdb.org/t/p/w500/8X5X5X5X5X5X.jpg",
  },
  {
    id: 6,
    title: "Jersey",
    genre: "Drama • Sports",
    duration: "2h 50m",
    language: "Telugu",
    rating: "4.8",
    poster:
      "https://image.tmdb.org/t/p/w500/9X5X5X5X5X5X.jpg",
  },
];

function Movies() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  const filteredMovies = movies.filter(
    (movie) => {
      const matchesSearch =
        movie.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesGenre =
        genre === "All" ||
        movie.genre
          .toLowerCase()
          .includes(genre.toLowerCase());

      return matchesSearch && matchesGenre;
    }
  );

  return (
    <div className="movies-page">

      <div className="movies-header">

        <span className="section-tag">
          MOVIE COLLECTION
        </span>

        <h1>
          Find Your <span>Movie</span>
        </h1>

        <p>
          Choose from the latest blockbusters
          and book your favorite seats.
        </p>

        <div className="movie-search">

          <span>🔎</span>

          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <div className="filter-buttons">

          {[
            "All",
            "Action",
            "Drama",
            "Sci-Fi",
            "Sports"
          ].map((item) => (
            <button
              key={item}
              className={
                genre === item
                  ? "active-filter"
                  : ""
              }
              onClick={() =>
                setGenre(item)
              }
            >
              {item}
            </button>
          ))}

        </div>

      </div>

      <div className="movie-grid movies-list">

        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))
        ) : (
          <div className="no-movies">
            <div>🎬</div>
            <h2>No movies found</h2>
            <p>
              Try another movie name or genre.
            </p>
          </div>
        )}

      </div>

    </div>
  );
}

export default Movies;