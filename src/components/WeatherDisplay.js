import React from 'react';

function WeatherDisplay({ data, units }) {
  const { current, forecast } = data;

  return (
    <div>
      <h2>Current Weather in {current.name}</h2>
      <p>Temperature: {current.main.temp}°{units === 'metric' ? 'C' : 'F'}</p>
      <p>Weather: {current.weather[0].description}</p>
      
      <h3>5-Day Forecast</h3>
      <ul>
        {forecast.slice(0, 5).map((day, index) => (
          <li key={index}>
            {new Date(day.dt_txt).toDateString()} - {day.main.temp}°{units === 'metric' ? 'C' : 'F'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherDisplay;
