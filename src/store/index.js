import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/'
// import logger from './middlewares/logger'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  )

export default store