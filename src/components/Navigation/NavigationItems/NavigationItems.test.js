// Enzyme allows us to render component independently for testing purpose
import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'

configure({ adapter: new Adapter() })

describe('<NavigationItems />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />)
  })

  it('should render two <NavigationItem /> elements if not authenticated', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2)
  })

  it('should render three <NavigationItem /> elements if authenticated', () => {
    // wrapper = shallow(<NavigationItems isAuthenticated />)
    wrapper.setProps({ isAuthenticated: true })
    expect(wrapper.find(NavigationItem)).toHaveLength(3)
  })

  it('should render a <NavigationItem /> elements with logout link', () => {
    wrapper.setProps({ isAuthenticated: true })
    expect(
      wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)
    ).toEqual(true)
  })

  it('should render a <NavigationItem /> with exact prop as a first child', () => {
    expect(wrapper.find(NavigationItem).at(0).props()).toEqual({
      link: '/',
      exact: true,
      children: 'Burger Builder',
    })
  })
})
