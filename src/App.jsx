import React from 'react'
import './App.css'
import Weather from './Weather'
import Pagination from 'react-js-pagination'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      weathers: [],
      numberOfWeathers: 0,
      activePage: 1,
      sliceStart: 0,
      sliceEnd: 8,
      isLoaded: false
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
            this.state.isLoaded ? 
            this.state.weathers.slice(this.state.sliceStart, this.state.sliceEnd).map(weather => <Weather weather={weather} key={weather.id} />) 
            : <div></div>
          }
        </div>

        {
          this.state.isLoaded ? 
          <div>
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={8}
              totalItemsCount={this.state.numberOfWeathers}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange.bind(this)}
              itemClass="page-item"
              linkClass="page-link"
            />
          </div>
          : <div></div>
        }
        

      </div>
    )
  }

   
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`)
    this.setState({
      activePage: pageNumber,
      sliceStart: ((pageNumber - 1) * 8),
      sliceEnd: (pageNumber * 8)
    })
  }

  componentDidMount() {
    fetch('https://api.openweathermap.org/data/2.5/find?lat=-6.842629&lon=107.616877&cnt=20&units=metric&appid=0136eeaa7054259785b882d3e82dbf00')
      .then((res) => res.json())
      .then(({ list, count }) => {
        console.log((Math.ceil(count / 8)))
        this.setState({
          weathers: list,
          numberOfWeathers: count,
          weatherImg: `http://openweathermap.org/img/wn/${list[0].weather[0].icon}@4x.png`,
          isLoaded: true
        })
      })
      .catch((err) => console.log(err, 'API FETCH ERROR'))
  }
}

export default App
