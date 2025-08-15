import React from "react";
import { Link } from "react-router-dom";

// MovieCard component to display a single movie's info
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.poster_path} alt={movie.title} />
      <h5>{movie.title}</h5>
      <p>{movie.release_date}</p>
      <Link to={`/movie/${movie.id}`} className="details-button">
        View Details
      </Link>
    </div>
  );
}

export default MovieCard;
