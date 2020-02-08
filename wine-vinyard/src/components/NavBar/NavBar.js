import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-services'

class NavBar extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    renderLogoutLink() {
        return (
            <div className='NavBar__logged-in'>
                <Link onClick={this.handleLogoutClick}
                    to='/'>
                    Logout
            </Link>
            </div>
        )
    }

    toggleLoginLink() {
        return (<div className='NavBar__not-logged-in'>
            <Link to='/login' style={{ textDecoration: 'none' }}>Login</Link>
            {'|'}
            <Link to='/signup' style={{ textDecoration: 'none' }}>Sign Up</Link>
        </div>
        )
    }
    render() {
        return (
            <div className='navigation'>
                <input type='checkbox' className='navigation__checkbox' id='navi-toggle' />
                <label className='navigation__button'></label>
                <div className='navigation__backgroud'>&nbsp;</div>

                <nav className='navigation__nav'>
                    <div className='navigation__list'>
                        {TokenService.hasAuthToken()
                            ? this.renderLogoutLink()
                            : this.toggleLoginLink()}
                    </div>
                </nav>
            </div>
        )
    }
}
export default NavBar