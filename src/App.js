import React, {Component} from 'react';
import './App.css';

import CurrentWeather from './components/currentWeather/CurrentWeather-component';
import Display from './components/display/Display-components';
import SearchField from './components/searchField/SearchField-component';

const API_KEY = "f6444799bbe49da7cf3edcbb410bc841";

class App extends Component {
  
  state={
    weatherData: {}
  }

  getWaether = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const api_call = await fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`);
    const data = await api_call.json();
    console.log(data);
    const weatherData = {
      city: data.location.name,
      country: data.location.country,
      region: data.location.region,
      currentDescription: data.current.weather_descriptions[0],
      humidity: data.current.humidity,
      windSpeed: data.current.wind_speed,
      temperature: data.current.temperature
    }
    this.setState({weatherData});
    // reset the search field
    event.target.elements.city.value = "";
  }

  render() {
    return (
      <div className="App">
        <h1>Weather Forecast Website</h1>
        <SearchField getWaether={this.getWaether} />
        <CurrentWeather weatherData={this.state.weatherData} />
        <Display />
      </div>
    );
  }
}

export default App;
