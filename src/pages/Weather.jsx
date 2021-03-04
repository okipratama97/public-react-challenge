import WeatherDetail from "../components/CardWeatherDetail"
import { useFetchWeather } from '../hooks/useApi'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Weather() {
  const { id } = useParams()
  useFetchWeather(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=0136eeaa7054259785b882d3e82dbf00`)

  const isLoading = useSelector(state => state.weathers.isLoading)
  const weather = useSelector(state => state.weathers.weather)

  return (
    <div className="container">
      <div className="row justify-content-center">
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
          <WeatherDetail weather={weather} page={'weather'} />
        }
      </div>
    </div>
  )
}

export default Weather