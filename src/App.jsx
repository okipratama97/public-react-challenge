import React from 'react'
import './App.css'
import Weather from './Weather'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      weathers: []
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
          {
            this.state.weathers.map(weather => <Weather weather={weather} key={weather.id} />)
          }
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
      })
      .catch((err) => console.log(err, 'API FETCH ERROR'))
  }
}

export default App
