import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchWeathers, fetchWeather } from '../store/actions'

export function useFetchWeathers (url, timeout = 0) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchWeathers(url, timeout))
  }, [url, timeout, dispatch])
}

export function useFetchWeather (url, timeout = 0) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchWeather(url, timeout))
  }, [url, timeout, dispatch])
}