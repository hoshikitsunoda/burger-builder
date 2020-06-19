import reducer from './order'
import * as actionTypes from '../actions/actionTypes'

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      orders: [],
      loading: false,
      purchased: false,
    })
  })

  it('should show loading spinner on purchase start', () => {
    expect(
      reducer(
        {
          orders: [],
          loading: false,
          purchased: false,
        },
        {
          type: actionTypes.PURCHASE_BURGER_START,
          loading: true,
        }
      )
    ).toEqual({
      orders: [],
      loading: true,
      purchased: false,
    })
  })
})
