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
            </div>
        )
    }
}
export default Title;