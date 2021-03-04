import '../App.css'
import { useDispatch } from 'react-redux'
import { addFavorites, removeFavorites, setFavoritesNumberOfWeathers } from '../store/actions'


function Weather (props) {
  const dispatch = useDispatch()

  function addToFavorite(weather) {
    console.log(weather.id, '<<<<< Weather ini akan ditambahkan ke favorite')
    dispatch(addFavorites(weather))
    dispatch(setFavoritesNumberOfWeathers())
  }

  function removeFromFavorite(weather) {
    console.log(weather.id, '<<<<< Weather ini akan diremove dari favorite')
    dispatch(removeFavorites(weather))
    dispatch(setFavoritesNumberOfWeathers())
  }

  return (
    <div className="col-lg-6 my-2">
      <div className="card weather-card">
        {
          props.weather.name ?
          <>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-7 p-3">
                  <h3>{props.weather.name}</h3>
                  <p>{props.weather.weather[0].description}</p>
                  <h3>{props.weather.main.temp} °C</h3>
                  <small>with wind speed around {props.weather.wind.speed}m/s</small>
                </div>
                <div className="col-lg-5">
                  <img src={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@4x.png`} alt="city weather" />
                </div>
              </div>
            </div>
            <div className="card-footer">
              {
                (props.page === 'weather') ?
                <button onClick={() => addToFavorite(props.weather)} className="btn btn-success">Add to Favorite</button> :
                <button onClick={() => removeFromFavorite(props.weather)} className="btn btn-danger">Remove from Favorite</button>
              }
            </div>
          </> :
          <div> Fetching </div>
        }
      </div>
    </div>
  )
}

export default Weather
