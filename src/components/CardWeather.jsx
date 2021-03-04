import '../App.css'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addFavorites, setFavoritesNumberOfWeathers } from '../store/actions'
import { useHistory } from 'react-router-dom'


function Weather (props) {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const history = useHistory()

  function addToFavorite(weather) {
    console.log(weather.id, '<<<<< Weather ini akan ditambahkan ke favorite')
    dispatch(addFavorites(weather))
    dispatch(setFavoritesNumberOfWeathers())
  }

  function removeFromFavorite(weather) {
    console.log(weather.id, '<<<<< Weather ini akan diremove dari favorite')
    dispatch(setFavoritesNumberOfWeathers())
  }

  function goToDetail(id) {
    history.push('/locations/' + id)
  }

  return (
    <div className="col-lg-3 my-2">
      <div className="card weather-card">
        {
          props.weather ?
          <>
            <div onClick={() => goToDetail(props.weather.id)} className="card-body weather-card-body">
              <img className="card-img-top" src={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@4x.png`} alt="city weather" />
              <h3 className="card-title">{props.weather.name}</h3>
              <p className="card-text">{props.weather.weather[0].main}</p>
            </div>
            <div className="card-footer">
              {
                (pathname === '/') ?
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
