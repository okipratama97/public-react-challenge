import Weather from "../components/Weather";
import { useState } from 'react'
import Pagination from 'react-js-pagination'
import Api from '../hooks/useApi'
import useScript from '../hooks/useScript'

function Weathers() {

  const [activePage, setActivePage] = useState(1)
  const [sliceStart, setSliceStart] = useState(0)
  const [sliceEnd, setSliceEnd] = useState(8)
  const [weathers, numberOfWeathers, isLoading] = Api (
    'https://api.openweathermap.org/data/2.5/find?lat=-6.842629&lon=107.616877&cnt=20&units=metric&appid=0136eeaa7054259785b882d3e82dbf00', 3000
    )
  useScript('https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js')

  function handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`)
    setActivePage(pageNumber)
    setSliceStart((pageNumber - 1) * 8)
    setSliceEnd(pageNumber * 8)
  }

  return (
    <div className="container">
      <div>
        <h1>
          FAVORITE LOCATIONS
        </h1>
      </div>
      <div className="row">
        {
          isLoading ? 
          <div className="mx-auto">
            <div className="mt-4">
              <h2>Getting weathers condition. Please wait.</h2>
            </div>
            <div>
              <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_wuqUXi.json"  background="transparent"  speed="1"  style={{"height" : "600px", "width" : '600px'}}  loop  autoplay></lottie-player>
            </div>
          </div> : 
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

export default Weathers