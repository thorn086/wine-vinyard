import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure} from 'enzyme'
import Title from './Title'

configure({adapter: new Adapter()})

describe('Title component',()=>{
    
    const title = shallow(<Title />)

    it('renders properly', ()=>{
        expect(title).toMatchSnapshot()
    })
})