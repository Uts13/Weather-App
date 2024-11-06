import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import Favorites from './Favorites';
import { fetchWeather } from '../Api';

function MainDashboard() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(localStorage.getItem('lastCity') || 'New York');
  const [units, setUnits] = useState('metric');

  useEffect(() => {
    if (city) fetchCityWeather(city);
  }, [city]);

  const fetchCityWeather = async (city) => {
    try {
      const data = await fetchWeather(city, units);
      setWeatherData(data);
      localStorage.setItem('lastCity', city);
    } catch (error) {
      console.error("City not found", error);
    }
  };

  const toggleUnits = () => setUnits(units === 'metric' ? 'imperial' : 'metric');

  return (
    <div>
      <SearchBar onSearch={setCity} />
      {weatherData && <WeatherDisplay data={weatherData} units={units} />}
      <Favorites onCitySelect={setCity} />
      <button onClick={toggleUnits}>Toggle °C / °F</button>
    </div>
  );
}

export default MainDashboard;
