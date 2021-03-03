import { useState, useEffect } from 'react'

export default function Api (url, timeout = 0) {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [numberOfData, setNumberOfData] = useState(0)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((res) => {
        try {
          console.log('FETCHING DATA')
          return res.json()
        } catch (error) {
          console.log(error)
          throw new Error(error)
        }
      })
      .then(({ list, count }) => {
        setData(list)
        setNumberOfData(count)
        setTimeout(() => {
          setLoading(false)
        }, timeout)
      })
      .catch((err) => {
        setError(err)
        return console.log(err, 'API FETCH ERROR')
    })
  }, [url, timeout])

  return [data, numberOfData, loading, error]
}