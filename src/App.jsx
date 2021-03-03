import './App.css'
import './pages/Weathers'
import { Switch, Route } from 'react-router-dom'
import Weathers from './pages/Weathers'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import Dummy from './pages/Dummy'

function App () {
  return (
    <>
      {/* Header and nav part */}
      <NavBar />

      {/* Weather cards part */}
      <Switch>
        <Route path="/locations">
          <Favorites />
        </Route>
        <Route path="/dummy">
          <Dummy />
        </Route>
        <Route path="/">
          <Weathers />
        </Route>
      </Switch>
    </>
  )
}

export default App
