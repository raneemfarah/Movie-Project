import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// MovieDetails component to show detailed info of a selected movie
function MovieDetails() {
  const { id } = useParams();// get movie id from URL
  const [movie, setMovie] = useState(null);// to store movie details
  const API_KEY = "2ca1e3f9f17d5cfa10bf58ec5dea5613";// TMDB API key

  // Fetch movie details from API
  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;// to show loading while fetching

return (
  <div className="movie-details">
    <img
      src={
        movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "https://via.placeholder.com/300x450"
      }
      alt={movie.title}
    />
    <div className="movie-info">
      <h2>{movie.title}</h2>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p>Rating: {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}</p>
      <p className="overview">{movie.overview}</p>
      <Link to="/" className="details-button">⬅ Back</Link>
    </div>
  </div>
);
}

export default MovieDetails;
