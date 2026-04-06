import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import FoodList from './components/FoodList';

const App = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const url = `https://world.openfoodfacts.org/api/v2/search?categories_tags=${encodeURIComponent(query)}&page_size=10`;
      const response = await fetch(url);
      
      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      
      // Filter out products without names immediately
      const validProducts = (data.products || []).filter(
        (p) => p.product_name?.trim()
      );

      setResults(validProducts);
    } catch (err) {
      setError("Unable to fetch food data. Please try again later.");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>FoodFacts</h1>
      <SearchBar onSearch={handleSearch} />

      {error && <p className="error-message">{error}</p>}

      {loading ? (
        <p className="loading-state">Loading delicious data...</p>
      ) : (
        <>
          {results.length === 0 && !error && (
            <p className="empty-state">Search for a food category to begin.</p>
          )}
          <FoodList products={results} />
        </>
      )}
    </div>
  );
};

export default App;