import React, { useState, useEffect } from 'react';
import './Weather.css'; 

var API_KEY = '472675c75c55dc272dbbac63ee6018f5'; 
function useWeather(city) {
  var [weather, setWeather] = useState(null);
  var [error, setError] = useState('');

  useEffect(function() {
    if (!city) {
      return;
    }

    function fetchWeather() {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(function(response) {
          if (!response.ok) {
            throw new Error('City not found. Please try again.');
          }
          return response.json();
        })
        .then(function(data) {
          setWeather(data);
          setError('');
        })
        .catch(function(error) {
          setError(error.message);
          setWeather(null);
        });
    }

    fetchWeather();
  }, [city]);

  return { weather: weather, error: error };
}

function Weather() {
  var [city, setCity] = useState('');
  var [submittedCity, setSubmittedCity] = useState('');
  var { weather, error } = useWeather(submittedCity);

  function handleSubmit() {
    if (city.trim() === '') {
      alert('Please enter a city name');
      return;
    }
    setSubmittedCity(city);
  }

  return (
    <div className="weatherapp1">

    <div className="weatherapp">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={function(e) { setCity(e.target.value); }}
      />
      <button className="weatherbtn" onClick={handleSubmit}>Get Weather</button>
      {error && <p>{error}</p>}
      {weather && (
        <div className="weatherinfo">
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Icon" />

        </div>
      )}
    </div>
    </div>
  );
}

export default Weather;
