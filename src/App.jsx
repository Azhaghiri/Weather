import React, { useState } from 'react'
import Search from './components/Search'
import Search2 from './components/Search2'
import WeatherCard from './components/WeatherCArd'
import Fooder from './components/Fooder'
import './App.css'

const App = () => {

  const [weatherDetails,setWeatherDetails] = useState(null)
  console.log(weatherDetails)

  return (
    <div>
      {/* <Search/> */}
      <Search2 setWeatherDetails={setWeatherDetails}/>
      {weatherDetails && <WeatherCard weatherDetails={weatherDetails} />}
      <Fooder/>
    </div>
  )
}

export default App
