import React from 'react'
import Title from '../../components/Title/Title'
import NavBar from '../../components/NavBar/NavBar'
import WineMenu from '../../components/WineMenu/wineMenu'

function Home() {
    return (<div>
        <header className='header'>
        <Title />
        </header>
        <NavBar />
        <br />
        <WineMenu />
    </div>
    )
}
export default Home