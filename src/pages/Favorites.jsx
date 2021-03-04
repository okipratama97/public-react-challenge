// import Weather from "../components/Weather";
import WeatherDetail from "../components/CardWeatherDetail";
import Pagination from 'react-js-pagination'
import { useSelector, useDispatch } from "react-redux"
import { setFavoritesActivePage, setFavoritesSliceStart, setFavoritesSliceEnd } from '../store/actions'

function Favorites() {
  const dispatch = useDispatch()

  const activePage = useSelector(state => state.favorites.activePage)
  const sliceStart = useSelector(state => state.favorites.sliceStart)
  const sliceEnd = useSelector(state => state.favorites.sliceEnd)
  const isLoading = useSelector(state => state.favorites.isLoading)
  const numberOfWeathers = useSelector(state => state.favorites.numberOfWeathers)
  const weathers = useSelector(state => state.favorites.favorites)

  function handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`)
    dispatch(setFavoritesActivePage(pageNumber))
    dispatch(setFavoritesSliceStart((pageNumber - 1) * 4))
    dispatch(setFavoritesSliceEnd(pageNumber * 4))
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
          weathers.slice(sliceStart, sliceEnd).map(weather => <WeatherDetail weather={weather} key={weather.id} />) 
        }
      </div>
      {
        isLoading ? 
        <div><p>No Favorite. Please add some :)</p></div> :
        <div>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={4}
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

export default Favorites