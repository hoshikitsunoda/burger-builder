import React, { useState, useEffect } from 'react'

import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux/Aux'

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null)

    const reqInterceptor = axios.interceptors.request.use((req) => {
      setError(null)
      return req
    })
    const resInterceptor = axios.interceptors.response.use(
      (res) => res,
      (err) => {
        setError(err)
      }
    )

    useEffect(() => {
      //this runs when component mounts
      return () => {
        //then this runs when unmounts
        axios.interceptors.request.eject(reqInterceptor)
        axios.interceptors.request.eject(resInterceptor)
      }
    }, [reqInterceptor, resInterceptor]) //to unmount, it needs second argument. it will only run when interceptors change in this hook.

    const errorConfirmedHandler = () => {
      setError(null)
    }

    return (
      <Aux>
        <Modal show={error} modalClosed={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    )
  }
}

export default withErrorHandler
