import React from 'react'
import categories from './wine_categories'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
describe('categories Page',()=>{
    const catig = shallow(<categories />)
    it('properly renders',()=>{
        expect(catig).toMatchSnapshot()
    })
})