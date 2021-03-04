import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

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
  return async function (dispatch, getState) {
    try {
      console.log(dispatch, '<<<!! dispatch')
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
  // return { type: 'FAVORITES/ADDFAVORITES', payload }
  return (dispatch, getState) => {
    try {
      const { favorites } = getState()
      const favoriteLength = favorites.favorites.length
      const newFavorite = [...favorites.favorites.filter((el) => el.id !== payload.id), payload]

      if (favoriteLength === newFavorite.length) {
        console.log('Duplikasi')
        MySwal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 2000,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', MySwal.stopTimer)
            toast.addEventListener('mouseleave', MySwal.resumeTimer)
          },
          icon: 'error',
          title: 'This location already added to favorites'
        })
      } else {
        console.log('Tidak Duplikasi')
        MySwal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 2000,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', MySwal.stopTimer)
            toast.addEventListener('mouseleave', MySwal.resumeTimer)
          },
          icon: 'success',
          title: 'Added this location to favorites!'
        })
        dispatch(setFavorites(newFavorite))
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export function removeFavorites(payload) {
  MySwal.fire({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 2000,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', MySwal.stopTimer)
      toast.addEventListener('mouseleave', MySwal.resumeTimer)
    },
    icon: 'success',
    title: 'Removed this location from favorites!'
  })
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