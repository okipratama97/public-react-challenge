import { combineReducers } from 'redux'
import weathersReducer from './weathers'
import favoritesReducer from './favorites'

const rootReducer = combineReducers({
  weathers: weathersReducer,
  favorites: favoritesReducer
})

export default rootReducer