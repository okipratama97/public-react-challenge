import { useState } from 'react'
import './App.css'
import Weather from './Weather'
import Pagination from 'react-js-pagination'
import Api from './Hooks/Api'

function App () {

  const [activePage, setActivePage] = useState(1)
  const [sliceStart, setSliceStart] = useState(0)
  const [sliceEnd, setSliceEnd] = useState(8)
  const [weathers, numberOfWeathers, isLoading] = Api('https://api.openweathermap.org/data/2.5/find?lat=-6.842629&lon=107.616877&cnt=20&units=metric&appid=0136eeaa7054259785b882d3e82dbf00')

  function handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`)
    setActivePage(pageNumber)
    setSliceStart((pageNumber - 1) * 8)
    setSliceEnd(pageNumber * 8)
  }

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
          isLoading ? 
          <div><h1>Getting Weather info. Please wait....</h1></div> : 
          weathers.slice(sliceStart, sliceEnd).map(weather => <Weather weather={weather} key={weather.id} />) 
        }
      </div>

      {
        isLoading ? 
        <div></div> :
        <div>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={8}
            totalItemsCount={numberOfWeathers}
            pageRangeDisplayed={5}
            onChange={handlePageChange.bind(this)}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      }
    </div>
  )
}

export default App
