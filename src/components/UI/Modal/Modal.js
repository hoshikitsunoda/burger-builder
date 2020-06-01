import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import classes from './Modal.css'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'

const modal = memo(
  (props) => {
    const mounted = useRef()
    useEffect(() => {
      if (!mounted.current) {
        mounted.current = true
      } else {
        console.log('[Modal] Updated')
      }
    })

    return (
      <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0',
          }}
        >
          {props.children}
        </div>
      </Aux>
    )
  },
  (prevProps, nextProps) => prevProps.show === nextProps.show
)

modal.propTypes = {
  show: PropTypes.bool,
  modalClosed: PropTypes.func,
  children: PropTypes.element,
}

export default modal
