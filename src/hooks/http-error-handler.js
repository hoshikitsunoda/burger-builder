import { useState, useEffect } from 'react'

export default (httpClient) => {
  const [error, setError] = useState(null)

  const reqInterceptor = httpClient.interceptors.request.use((req) => {
    setError(null)
    return req
  })
  const resInterceptor = httpClient.interceptors.response.use(
    (res) => res,
    (err) => {
      setError(err)
    }
  )

  useEffect(() => {
    //this runs when component mounts
    return () => {
      //then this runs when unmounts
      httpClient.interceptors.request.eject(reqInterceptor)
      httpClient.interceptors.request.eject(resInterceptor)
    }
  }, [reqInterceptor, resInterceptor]) //to unmount, it needs second argument. it will only run when interceptors change in this hook.

  const errorConfirmedHandler = () => {
    setError(null)
  }

  return [error, errorConfirmedHandler]
}
