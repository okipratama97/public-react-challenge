import React from 'react'
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      weathers: [],
      weather: {},
      weatherImg: ''
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <h1>
              Current Weather
            </h1>
          </div>
        </div>
        
        <div className="row">

          {this.state.weathers.map(el => {
            return (
              <div className="col-lg-3 my-2" key={el.id}>
                <div className="card">
                  <img className="card-img-top" src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@4x.png`} alt="city weather" />
                  <div className="card-body">
                    <h3 className="card-title">{el.name ? el.name : 'City Name'}</h3>
                    <p className="card-text">{el.weather ? el.weather[0].main : 'City Weather'}</p>
                  </div>
                </div>
              </div>
            )
          })}

            <div className="col-lg-3 my-2">
              <div className="card">
                <img className="card-img-top" src={this.state.weatherImg} alt="city weather" />
                <div className="card-body">
                  <h3 className="card-title">{this.state.weather.name ? this.state.weather.name : 'City Name'}</h3>
                  <p className="card-text">{this.state.weather.weather ? this.state.weather.weather[0].main : 'City Weather'}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }

  componentDidMount() {
    fetch('https://api.openweathermap.org/data/2.5/find?lat=-6.842629&lon=107.616877&cnt=20&units=metric&appid=0136eeaa7054259785b882d3e82dbf00')
      .then((res) => res.json())
      .then(({ list }) => {
        this.setState({
          weathers: list,
          weather: list[0],
          weatherImg: `http://openweathermap.org/img/wn/${list[0].weather[0].icon}@4x.png`
        })
        
        console.log(list)
      })
      .catch((err) => console.log(err, 'API FETCH ERROR'))
  }
}

export default App;
