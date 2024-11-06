import React, { useState, useEffect } from 'react';
import { getFavorites, addFavorite, removeFavorite } from '../Api';

function Favorites({ onCitySelect }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    const response = await getFavorites();
    setFavorites(response.data);
  };

  const handleAddFavorite = async (city) => {
    await addFavorite(city);
    loadFavorites();
  };

  const handleRemoveFavorite = async (id) => {
    await removeFavorite(id);
    loadFavorites();
  };

  return (
    <div>
      <h3>Favorites</h3>
      <ul>
        {favorites.map((fav) => (
          <li key={fav.id}>
            {fav.city}
            <button onClick={() => onCitySelect(fav.city)}>Show Weather</button>
            <button onClick={() => handleRemoveFavorite(fav.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
