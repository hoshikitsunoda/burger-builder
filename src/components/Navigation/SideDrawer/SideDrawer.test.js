// Enzyme allows us to render component independently for testing purpose
import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import SideDrawer from './SideDrawer'
import Backdrop from '../../UI/Backdrop/Backdrop'

configure({ adapter: new Adapter() })

describe('<SideDrawer />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<SideDrawer />)
  })

  it('should render Backdrop if open', () => {
    expect(wrapper.find(Backdrop)).toHaveLength(1)
  })
})
