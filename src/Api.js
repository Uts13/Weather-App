import axios from 'axios';

const WEATHER_API_KEY = `0acc7fc146c23764c39b995995b30bad`;
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5';
const JSON_SERVER_URL = 'http://localhost:5000/favorites';

// Fetch current weather and 5-day forecast
export const fetchWeather = async (city, units = 'metric') => {
  const current = await axios.get(`${WEATHER_BASE_URL}/weather?q=${city}&units=${units}&appid=${WEATHER_API_KEY}`);
  const forecast = await axios.get(`${WEATHER_BASE_URL}/forecast?q=${city}&units=${units}&appid=${WEATHER_API_KEY}`);
  return { current: current.data, forecast: forecast.data.list };
};

// Favorite city management
export const getFavorites = () => axios.get(JSON_SERVER_URL);
export const addFavorite = (city) => axios.post(JSON_SERVER_URL, { city });
export const removeFavorite = (id) => axios.delete(`${JSON_SERVER_URL}/${id}`);
