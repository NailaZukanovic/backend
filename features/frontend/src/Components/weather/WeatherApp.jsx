import React from "react";

import Form from "./Form"
import Weather from "./Weather"
import './Weather.css';

const API_KEY = "d5d6bd7baefaaf6d315cf4f2c66f2369"

class WeatherApp extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    wind: undefined,
    wind_deg: undefined,
    error: undefined
  }
  //
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country =  e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        wind: data.wind.speed,
        wind_deg: data.wind.deg,
        error: ""
      });
    }
    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        wind: undefined,
        wind_deg: undefined,
        error: "Please enter a valid Location"
      });
    }
  }

  render (){
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                {/* <div className="col-xs-5 title-container">
                  <Titles />
                </div> */}
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  wind={this.state.wind}
                  wind_deg={this.state.wind_deg}
                  error={this.state.error}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherApp;