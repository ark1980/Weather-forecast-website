import React from 'react'

import FutureForecast from '../futureWeather/FutureForecast-component'

const CurrentWeather = (props) => {
  return (
    <div>
    <h3>{props.todayForecast.weather[0].description}</h3>
      <FutureForecast />
    </div>
  )
}

export default CurrentWeather

