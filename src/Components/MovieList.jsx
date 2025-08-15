import React from "react";
import MovieCard from "./MovieCard";

// Component to display a list of movies in a grid layout
function MovieList({ movies }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
