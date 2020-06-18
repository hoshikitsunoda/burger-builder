import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classes from './Modal.css'
import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    )
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    )
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  modalClosed: PropTypes.func,
  children: PropTypes.element,
}

export default Modal

// import React, { memo, useEffect, useRef } from 'react'
// import PropTypes from 'prop-types'

// import classes from './Modal.css'
// import Aux from '../../../hoc/Aux/Aux'
// import Backdrop from '../Backdrop/Backdrop'

// const modal = memo(
//   (props) => {
//     const mounted = useRef()
//     useEffect(() => {
//       if (!mounted.current) {
//         mounted.current = true
//       } else {
//         console.log('[Modal] Updated')
//       }
//     })

//     return (
//       <Aux>
//         <Backdrop show={props.show} clicked={props.modalClosed} />
//         <div
//           className={classes.Modal}
//           style={{
//             transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
//             opacity: props.show ? '1' : '0',
//           }}
//         >
//           {props.children}
//         </div>
//       </Aux>
//     )
//   },
//   (prevProps, nextProps) =>
//     prevProps.show === nextProps.show ||
//     nextProps.children === prevProps.children
// )

// modal.propTypes = {
//   show: PropTypes.bool,
//   modalClosed: PropTypes.func,
//   children: PropTypes.element,
// }

// export default modal
