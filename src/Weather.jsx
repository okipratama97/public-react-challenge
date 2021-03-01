import { Component } from 'react'
import './App.css'

class Weather extends Component {
  render() {
    return (
      <div className="col-lg-3 my-2">
        <div className="card">
          <img className="card-img-top" src={this.props.weather.weather ? `http://openweathermap.org/img/wn/${this.props.weather.weather[0].icon}@4x.png` : '404'} alt="city weather" />
          <div className="card-body">
            <h3 className="card-title">{this.props.weather.name ? this.props.weather.name : 'City Name'}</h3>
            <p className="card-text">{this.props.weather.weather ? this.props.weather.weather[0].main : 'City Weather'}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Weather
