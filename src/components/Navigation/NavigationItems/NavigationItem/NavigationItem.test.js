// Enzyme allows us to render component independently for testing purpose
import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { NavLink } from 'react-router-dom'

import NavigationItem from './NavigationItem'

configure({ adapter: new Adapter() })

describe('<NavigationItem />', () => {
  const toProps = {
    to: '/',
  }
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<NavigationItem {...toProps} />)
  })

  it('should render one NavLink', () => {
    expect(wrapper.find(NavLink)).toHaveLength(1)
  })

  it('should receive props', () => {
    expect(wrapper.find(NavLink).prop()).toEqual({
      to: undefined,
      exact: undefined,
      activeClassName: undefined,
      children: undefined,
    })
  })
})
