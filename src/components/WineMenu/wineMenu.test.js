import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure} from 'enzyme'
import WineMenu from './wineMenu'

configure({adapter: new Adapter()})

describe('wineMenu component',()=>{
    const wM = shallow(<WineMenu />)
    it(' renders properly',()=>{
        expect(wM).toMatchSnapshot()
    })
})