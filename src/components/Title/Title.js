import React from 'react'
import './Title.css'
import WineMenu from '../WineMenu/wineMenu'

class Title extends React.Component {
    render() {
        return (
            <div className='text-box'>
                <h1 className='heading-primary'>
                    <span className='heading-main'>
                        <span className='letter'>W</span>ine
                        <span className='letter'>V</span>inyard</span>
                    <span className='heading-sub'>is where <span className='word-sub'>taste</span> begins</span>
                </h1>
                <WineMenu />
                <div className='site-description'>
                    <p>Join the site that offers quick information about wines. If you're new to the site create an account or take a look inside by clicking on the LOGIN button above and use our test user.</p>
                </div>
            </div>
        )
    }
}
export default Title;