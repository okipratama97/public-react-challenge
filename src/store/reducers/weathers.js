const initialState = {
  weathers: [],
  weather: [],
  activePage: 1,
  sliceStart: 0,
  sliceEnd: 8,
  isLoading: true,
  numberOfWeathers: 0,
  timeout: 0,
  error: null
}

function reducer (state = initialState, action) {
  const { type, payload } = action

  switch(type) {
    case 'WEATHERS/SETWEATHERS':
      return {...state, weathers: payload}
    case 'WEATHERS/SETWEATHER':
      return {...state, weather: payload}
    case 'WEATHERS/SETACTIVEPAGE':
      return {...state, activePage: payload}
    case 'WEATHERS/SETSLICESTART':
      return {...state, sliceStart: payload}
    case 'WEATHERS/SETSLICEEND':
      return {...state, sliceEnd: payload}
    case 'WEATHERS/SETNUMBEROFWEATHERS':
      return {...state, numberOfWeathers: payload}
    case 'WEATHERS/SETISLOADING':
      return {...state, isLoading: payload}
    case 'WEATHERS/SETTIMEOUT':
        return {...state, timeout: payload}
    case 'WEATHERS/SETERROR':
      return {...state, error: payload}
    default:
      return state
  }
}

export default reducer