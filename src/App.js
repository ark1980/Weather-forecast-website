import React, {Component} from 'react';
import './App.css';

import CurrentWeather from './components/currentWeather/CurrentWeather-component';
import Display from './components/display/Display-components';
import SearchField from './components/searchField/SearchField-component';

const API_KEY = "f6444799bbe49da7cf3edcbb410bc841";

class App extends Component {
  
  state= {
    userLocation: {
      lat: null,
      lon: null
    },
    weatherData: {}
  }

  // { Fetch weather data ======================================= }
fetchCurrentWeatherData = async (location) => {
  const response = await fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${location.coordinates1},${location.coordinates2}`);
  const data = await response.json();
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
}

  // { Get weather data based on the location of the user device ===================== }
  componentDidMount() {  
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser')
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({userLocation: {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }})
        // set the user location based on latitude & longitude
        const location = {
          coordinates1: this.state.userLocation.lat,
          coordinates2: this.state.userLocation.lon
        }
        this.fetchCurrentWeatherData(location);
      }, () => console.log('Unable to retrieve your location'))
    }
  }


// { Get weather data based on the user search ===================== }
  getWaether = (e) => {
    e.preventDefault();
    // set the user location based on entered city & country input 
    const location = {
      coordinates1: e.target.elements.city.value,
      coordinates2: e.target.elements.country.value
    }
    this.fetchCurrentWeatherData(location);
    // clear the search field
    e.target.elements.city.value = "";
    e.target.elements.country.value = "";
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
