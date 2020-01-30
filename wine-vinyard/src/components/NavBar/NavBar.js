import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return (
            <div className='navigation'>
                <input type='checkbox' className='navigation__checkbox' id='navi-toggle' />
                <label for='navi-toggle' className='navigation__button'></label>
                <div className='navigation__backgroud'>&nbsp;</div>

                <nav className='navigation__nav'>
                    <div className='navigation__list'>
                     <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
                        {'|'}
                     <Link to='/login' style={{ textDecoration: 'none' }}>Login</Link>
                        {'|'}
                       <Link to='/signup' style={{ textDecoration: 'none' }}>Sign Up</Link>
                    </div>
                </nav>
            </div>
        )
    }
}
export default NavBar