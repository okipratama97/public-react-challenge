export function setWeathers(payload) {
  return { type: 'WEATHERS/SETWEATHERS', payload }
}

export function setWeather(payload) {
  return { type: 'WEATHERS/SETWEATHER', payload }
}

export function setWeathersActivePage(payload) {
  return { type: 'WEATHERS/SETACTIVEPAGE', payload }
}

export function setWeathersSliceStart(payload) {
  return { type: 'WEATHERS/SETSLICESTART', payload }
}

export function setWeathersSliceEnd(payload) {
  return { type: 'WEATHERS/SETSLICEEND', payload }
}

export function setWeathersNumberOfWeathers(payload) {
  return { type: 'WEATHERS/SETNUMBEROFWEATHERS', payload }
}

export function setWeathersIsLoading(payload) {
  return { type: 'WEATHERS/SETISLOADING', payload }
}

export function setWeathersTimeout(payload) {
  return { type: 'WEATHERS/SETTIMEOUT', payload }
}

export function setErrorWeathers(payload) {
  return { type: 'WEATHERS/SETERROR', payload }
}

export function fetchWeathers(payload, timeout = 0) {
  return async function (dispatch) {
    try {
      console.log('Fetching Weathers');
      dispatch(setWeathersIsLoading(true))
      const response = await fetch(payload)
      const { list, count } = await response.json()
      dispatch(setWeathers(list))
      dispatch(setWeathersNumberOfWeathers(count))
      setTimeout(() => {
        dispatch(setWeathersIsLoading(false))
      }, timeout);
    } catch (err) {
      dispatch(setErrorWeathers(err))
      console.log(err, 'API FETCH ERROR')
    }
  }
}

export function fetchWeather(payload, timeout = 0) {
  return async function (dispatch) {
    try {
      console.log('Fetching Single Weather')
      dispatch(setWeathersIsLoading(true))
      const response = await fetch(payload)
      const weather = await response.json()
      dispatch(setWeather(weather))
      setTimeout(() => {
        dispatch(setWeathersIsLoading(false))
      }, timeout);
    } catch (err) {
      dispatch(setErrorWeathers(err))
      console.log(err, 'API FETCH ERROR')
    }
  }
}

export function setFavorites(payload) {
  return { type: 'FAVORITES/SETFAVORITES', payload }
}

export function addFavorites(payload) {
  return { type: 'FAVORITES/ADDFAVORITES', payload }
}

export function removeFavorites(payload) {
  return { type: 'FAVORITES/REMOVEFAVORITES', payload }
}

export function setFavoritesActivePage(payload) {
  return { type: 'FAVORITES/SETACTIVEPAGE', payload }
}

export function setFavoritesSliceStart(payload) {
  return { type: 'FAVORITES/SETSLICESTART', payload }
}

export function setFavoritesSliceEnd(payload) {
  return { type: 'FAVORITES/SETSLICEEND', payload }
}

export function setFavoritesNumberOfWeathers(payload) {
  return { type: 'FAVORITES/SETNUMBEROFWEATHERS', payload }
}

export function setFavoritesIsLoading(payload) {
  return { type: 'FAVORITES/SETISLOADING', payload }
}

export function setFavoritesTimeout(payload) {
  return { type: 'FAVORITES/SETTIMEOUT', payload }
}

export function setErrorFavorites(payload) {
  return { type: 'FAVORITES/SETERROR', payload }
}