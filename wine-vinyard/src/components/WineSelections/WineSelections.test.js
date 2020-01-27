import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import {  configure, shallow } from 'enzyme'
import {Link } from 'react-router-dom'

import WineSelections from './WineSelections'

configure({ adapter: new Adapter() })

describe('WineSelections Component', () => {
    
    
    const wineSel =shallow(<WineSelections  />)

    it('should render a Link', () => {
        expect(wineSel.containsMatchingElement(<Link />)).toBe(true)
    })
   
})
