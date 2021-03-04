import './App.css'
import './pages/Weathers'
import { Switch, Route } from 'react-router-dom'
import Weathers from './pages/Weathers'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import Weather from './pages/Weather'
import useScript from './hooks/useScript'


function App () {
  useScript('https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js')

  return (
    <>
      {/* Header and nav part */}
      <NavBar />

      {/* Weather cards part */}
      <Switch>
        <Route path="/locations/:id">
          <Weather />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/">
          <Weathers />
        </Route>
      </Switch>
    </>
  )
}

export default App
