import React, { useState } from 'react';
import axios from 'axios';
// import './Search.css'; // optional - for styling

const Search = () => {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  // Input handler
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  // KeyDown handler (trigger on Enter)
  const handleKeyDown = async (e) => {
    if (e.key !== 'Enter') return; // only call API on Enter key press
    if (!search.trim()) return; // prevent empty searches

    console.log('🔍 Fetching weather for:', search);

    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: search },
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY ,
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      console.log('✅ Response:', response.data);
      setWeather(response.data);
      setError('');
    } catch (err) {
      console.error('❌ Error:', err.response?.data || err.message);
      setError('City not found. Try another name.');
      setWeather(null);
    }
  };

  return (
    <div>
      <h1>{weather?.location.country}</h1>
    <div className="search-section" style={styles.container}>
      <h1 style={styles.heading}>🌤️ Weather Search</h1>
      <div className='result-Container' style={{minHeight: '300px',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type city name and press Enter..."
          value={search}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          style={styles.input}
        />
      </div>

      {/* Error message */}
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

      {/* Weather info */}
      {weather && (
        <div style={styles.card}>
          <h2>
            {weather.location.name}, {weather.location.country}
          </h2>
          <h3>{weather.current.temp_c}°C</h3>
          <p>{weather.current.condition.text}</p>
          <img
            src={weather.current.condition.icon}
            alt="weather icon"
            style={{ width: '80px' }}
          />
          <p>Humidity: {weather.current.humidity}%</p>
          <p>Wind: {weather.current.wind_kph} kph</p>
        </div>
      )}
      </div>
    </div>
    </div>
  );
};

// Inline styles (optional, you can use CSS file too)
const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    textAlign: 'center',
    marginTop: '40px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    marginBottom: '20px',
  },
  inputContainer: {
    display: 'inline-block',
  },
  input: {
    padding: '10px',
    width: '250px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  card: {
    marginTop: '30px',
    width: '280px',
    display: 'inline-block',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 2px 6px rgba(0,0,0,0.2)',
  },
};

export default Search;
