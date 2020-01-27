import React from 'react'
import WineGroup from './wine-group'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
describe('WineGroup component', ()=>{
    const wineGrp = shallow(<WineGroup />)

    it('renders properly',()=>{
        expect(wineGrp).toMatchSnapshot()
    })
})
