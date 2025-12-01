import React, { useState } from 'react'
import axios from 'axios';

const Search2 = ({setWeatherDetails}) => {
    const [search,setSearch] = useState('');

    const handleInput = (e) => {
        setSearch(e.target.value);
        setWeatherDetails(null)
    }


    const handleKeyDown = async (e) => {
        if(e.key != 'Enter') return

        //  console.log('🔍 Fetching weather for:', search);

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
     setWeatherDetails(response.data)
    } catch (err) {
      console.error('❌ Error:', err.response?.data || err.message);
    }

    }

  return (
    <div>
        <div className='searchsection'>
            <h1 style={{textAlign:'center'}}>Weather App</h1>
            <div className='search-container'>
                <input type="text"
                 placeholder='Search City'
                 value={search}
                 onChange={handleInput}
                 onKeyDown={handleKeyDown}
                 />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
      
    </div>
  )
}

export default Search2
