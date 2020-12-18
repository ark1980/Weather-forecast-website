import React, {Component} from 'react';
import './App.css';

import CurrentWeather from './components/currentWeather/CurrentWeather-component';
import Display from './components/display/Display-components';

const API_KEY = "9b7fb20541e78f35243bb6340671081b";

class App extends Component {
  constructor() {
    super()

    this.state = {
      city: "novato",
      country: "US",
      weatherCondition: null,
    }
  }

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_KEY}`)
    .then(res => res.json())
    .then(data => this.setState({weatherCondition: data}))
  }

  render() {
    return (
      <div className="App">
        <h1>Weather Forecast Website</h1>
        <CurrentWeather todayForecast={this.state.weatherCondition}/>
        <Display todayForecast={this.state.weatherCondition}/>
      </div>
    );
  }
}

export default App;
