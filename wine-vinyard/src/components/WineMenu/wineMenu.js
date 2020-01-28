import React from 'react'
import {Link} from 'react-router-dom'
import './WineMenu.css'


class WineMenu extends React.Component {
    
    render() {
        
        return (
            
            <section className='wine-menu'>
                
                <li className='wine-link'>
                    <Link to={`/wine`}><button
                        tag='button'
                        role='link'
                    >All Wines</button></Link>
                </li>
                  
               
            </section >
        )
    }
}
export default WineMenu