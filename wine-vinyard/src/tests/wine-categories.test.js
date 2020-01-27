import React from 'react'
import Categories from '../pages/wine_categories/wine_categories'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
describe('Categories Page',()=>{
    const catag = shallow(<Categories />)
    it('contains a WineGroup component', () => {
        expect(catag.find('WineGroup').exists()).toBe(true)
    })
    it('contains a NavBar component', () => {
        expect(catag.find('NavBar').exists()).toBe(true)
    })
})