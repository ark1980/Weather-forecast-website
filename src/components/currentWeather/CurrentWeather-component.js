import React from 'react'

import FutureForecast from '../futureWeather/FutureForecast-component'

const CurrentWeather = (props) => {
  return (
    <div>
    <h3>{props.weatherData.currentDescription}</h3>
      <FutureForecast />
    </div>
  )
}

export default CurrentWeather

