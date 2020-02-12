import React from 'react'
import Catigories from './wine_catigories'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
describe('Catigories Page',()=>{
    const catig = shallow(<Catigories />)
    it('properly renders',()=>{
        expect(catig).toMatchSnapshot()
    })
})