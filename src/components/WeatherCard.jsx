import React from 'react'

const WeatherCard = ({weatherDetails}) => {

  return (
    <div  className='weather-section'>
      <div className="weather-card">
        <div className="weather-temp-c">
          {weatherDetails.current.temp_c}<sup>o</sup>
        </div>
        <div className="weather-info">
          <span>
            {weatherDetails.current.humidity}
          </span>
          <span>
            {weatherDetails.current.cloud}
          </span>
        </div>
        <div className="weather-place">
          {weatherDetails.location.name},{weatherDetails.location.region},{weatherDetails.location.country}
        </div>
        <div className="weather-img">
          <img className='images' style={{width:'70px',position:'relative',bottom:'120px',left:'25px'}} src={weatherDetails.current.condition.icon} alt="" />
        </div>
      </div>
    </div>
  )
} 

export default WeatherCard
