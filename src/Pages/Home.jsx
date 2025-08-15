import React, { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import MovieList from "../Components/MovieList";

// Home component to display search bar and a movie list
function Home() {
  const [movies, setMovies] = useState([]);// to store movies
  const API_KEY = "2ca1e3f9f17d5cfa10bf58ec5dea5613";// TMDB API key

  // Fetch movies from API based on query
  const fetchMovies = async (query) => {
    if (!query) return;
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    const data = await res.json();

    const formattedMovies = data.results.map((movie) => ({
      ...movie,
      poster_path: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/300x450",
    }));

    setMovies(formattedMovies);// to update state
  };

  useEffect(() => {
    fetchMovies("Avengers");
  }, []);

  return (
    <>
      <SearchBar onSearch={fetchMovies} />
      <MovieList movies={movies} /> 
    </>
  );
}

export default Home;
