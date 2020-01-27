import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import WineGroup from '../../components/wine-group/wine-group'

function Categories(){
    return(
        <div className='wine-catigories-page'>
            <h1 className='catigories-title'>Wine Categories</h1>
            <NavBar />
            <WineGroup />
        </div>
    )
}

export default Categories