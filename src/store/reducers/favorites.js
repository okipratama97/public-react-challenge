const initialState = {
  favorites: [],
  activePage: 1,
  sliceStart: 0,
  sliceEnd: 4,
  isLoading: false,
  numberOfWeathers: 0,
  timeout: 0,
  error: null
}

function reducer (state = initialState, action) {
  const { type, payload } = action

  switch(type) {
    case 'FAVORITES/SETFAVORITES':
      return {...state, favorites: payload}
    case 'FAVORITES/ADDFAVORITES':
      return {...state, favorites: [...state.favorites.filter((el) => el.id !== payload.id), payload] }
    case 'FAVORITES/REMOVEFAVORITES':
      return {...state, favorites: state.favorites.filter((el) => el.id !== payload.id)}
    case 'FAVORITES/SETACTIVEPAGE':
      return {...state, activePage: payload}
    case 'FAVORITES/SETSLICESTART':
      return {...state, sliceStart: payload}
    case 'FAVORITES/SETSLICEEND':
      return {...state, sliceEnd: payload}
    case 'FAVORITES/SETNUMBEROFWEATHERS':
      return {...state, numberOfWeathers: payload ? payload : state.favorites.length}
    case 'FAVORITES/SETISLOADING':
      return {...state, isLoading: payload}
    case 'FAVORITES/SETTIMEOUT':
        return {...state, timeout: payload}
    case 'FAVORITES/SETERROR':
      return {...state, error: payload}
    default:
      return state
  }
}

export default reducer