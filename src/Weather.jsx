import './App.css'

function Weather (props) {
  return (
    <div className="col-lg-3 my-2">
      <div className="card">
        {
          props.weather ?
          <>
            <img className="card-img-top" src={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@4x.png`} alt="city weather" />
            <div className="card-body">
              <h3 className="card-title">{props.weather.name}</h3>
              <p className="card-text">{props.weather.weather[0].main}</p>
            </div>
          </> :
          <div> Fetching </div>
        }
      </div>
    </div>
  )
}

export default Weather
