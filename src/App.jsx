import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";
import './App.css';

// Main App component with routing for Home and MovieDetails pages
function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Movie Search App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
