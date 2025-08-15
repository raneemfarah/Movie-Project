import React, { useState } from "react";

// SearchBar component with input and submit button
function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");// to store input value

  const handleSubmit = (e) => {
    e.preventDefault();// prevent page reload
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
