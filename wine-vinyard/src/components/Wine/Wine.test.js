import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import {mount, configure} from 'enzyme'
import Wine from './Wine'

configure({adapter: new Adapter()})

describe('Wine',()=>{
    
    const navBar = mount(<Wine />)
    it('properly renders', ()=>{
        expect(navBar).toMatchSnapshot()
    })
})