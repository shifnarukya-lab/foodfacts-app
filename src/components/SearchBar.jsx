import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();

    if (trimmedQuery) {
      onSearch(trimmedQuery);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="search">
      <input
        type="search" // Use type="search" for native browser features (like the 'X' to clear)
        id="food-search"
        placeholder="Search food (e.g., 'Nutella')..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search for food products"
      />
      <button type="submit" disabled={!query.trim()}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
