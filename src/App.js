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
      currenWeather: null,
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Weather Forecast Website</h1>
        <CurrentWeather />
        <Display />
      </div>
    );
  }
}

export default App;
