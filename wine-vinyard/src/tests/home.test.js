import React from 'react'
import Home from '../pages/Home/Home'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('all other components render properly', () => {
    const home = shallow(<Home />)
  
    it('contains a NavBar component', () => {
        expect(home.find('NavBar').exists()).toBe(true)
    })

})