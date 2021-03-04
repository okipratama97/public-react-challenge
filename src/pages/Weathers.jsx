import Weather from "../components/CardWeather"
import Pagination from 'react-js-pagination'
import { useFetchWeathers } from '../hooks/useApi'
import { useSelector, useDispatch } from "react-redux"
import { setWeathersActivePage, setWeathersSliceStart, setWeathersSliceEnd } from '../store/actions'


function Weathers() {
  const dispatch = useDispatch()

  useFetchWeathers('https://api.openweathermap.org/data/2.5/find?lat=-6.842629&lon=107.616877&cnt=20&units=metric&appid=0136eeaa7054259785b882d3e82dbf00', 2000)
  const activePage = useSelector(state => state.weathers.activePage)
  const sliceStart = useSelector(state => state.weathers.sliceStart)
  const sliceEnd = useSelector(state => state.weathers.sliceEnd)
  const isLoading = useSelector(state => state.weathers.isLoading)
  const numberOfWeathers = useSelector(state => state.weathers.numberOfWeathers)
  const weathers = useSelector(state => state.weathers.weathers)

  function handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`)
    dispatch(setWeathersActivePage(pageNumber))
    dispatch(setWeathersSliceStart((pageNumber - 1) * 8))
    dispatch(setWeathersSliceEnd(pageNumber * 8))
  }

  return (
    <div className="container">
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