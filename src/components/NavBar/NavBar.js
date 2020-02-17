import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-services'

class NavBar extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        window.location.reload();
    }

    renderLogoutLink() {
        return (
            <div className='navigation__item'>
                <li className='navigation__item' onClick={this.handleLogoutClick}>
                    <button className='red-btn logout-btn'>
                        <Link to='/' style={{ textDecoration: 'none', color: '#fff290', padding: '1rem',fontFamily: 'Lemonada, cursive' }}> Logout</Link>
                    </button>
                </li>
                <li className='navigation__item'>
                    <button className='red-btn home-btn'>
                        <Link to='/' style={{ textDecoration: 'none', color: '#fff290', padding: '1rem',fontFamily: 'Lemonada, cursive' }}>Home</Link>
                    </button>
                </li>
            </div>
        )
    }
    toggleLoginLink() {
        return (
            <div className='navigation__item'>
                <li className='navigation__item'>
                    <button className='red-button login-btn'>
                        <Link to='/login' style={{ textDecoration: 'none', color: '#fff290', padding: '1rem',fontFamily: 'Lemonada, cursive' }}>Login</Link>
                    </button>
                </li>
                <li className='navigation__item'>
                    <button className='red-button signup-btn'>
                        <Link to='/signup' style={{ textDecoration: 'none', color: '#fff290', padding: '1rem',fontFamily: 'Lemonada, cursive' }}>Sign Up</Link>
                    </button>
                </li>
                <li className='navigation__item'>
                    <button className='red-button home-btn'>
                        <Link to='/' style={{ textDecoration: 'none', color: ' #fff290', padding: '1rem',fontFamily: 'Lemonada, cursive' }}>Home</Link>
                    </button>
                </li>
            </div>
        )
    }
    render() {
        return (
            <div className='navigation'>
                <input type='checkbox' className='navigation__checkbox' id='navi-toggle' />
                <label htmlFor='navi-toggle' className='navigation__button'>
                    <span className='navigation__icon'></span>
                </label>
                <div className='navigation__backgroud'>&nbsp;</div>

                <nav className='navigation__nav'>
                    <ul className='navigation__list'>
                        {TokenService.hasAuthToken()
                            ? this.renderLogoutLink()
                            : this.toggleLoginLink()}
                    </ul>
                </nav>
            </div>
        )
    }
}
export default NavBar