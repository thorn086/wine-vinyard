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
            <div className='navigation__item' onClick={this.handleLogoutClick}>
                <li className='navigation__item'>
                    <Link to='/' onClick={() => window.location.reload()} style={{ textDecoration: 'none',left:'0', fontSize: '1rem', fontWeight: '300', color: 'white', textTransform: 'uppercase', backgroundImage: 'linear-gradient(120deg, #4c4cf2 80%, #4c4cf2 5%, white 92%', padding: '.5rem', borderRadius: '45%', border: '2px solid black', boxShadow: '0 1rem 3rem black', backgroundSize: '100%' }}> Logout</Link>
                </li>
                <li className='navigation__item'>
                    <Link to='/' style={{ textDecoration: 'none', fontSize: '1rem', fontWeight: '300', color: 'white', textTransform: 'uppercase', backgroundImage: 'linear-gradient(120deg, #4c4cf2 80%, #4c4cf2 5%, white 92%', padding: '.5rem', borderRadius: '45%', border: '2px solid black', boxShadow: '0 1rem 3rem black', backgroundSize: '100%' }}>Home</Link>
                </li>
            </div>
        )
    }

    toggleLoginLink() {
        return (
            <div>
                <li className='navigation__item'>
                    <Link to='/login' style={{ textDecoration: 'none', fontSize: '1rem', fontWeight: '300', color: 'white', textTransform: 'uppercase', backgroundImage: 'linear-gradient(120deg, #4c4cf2 80%, #4c4cf2 5%, white 92%', padding: '.5rem ', borderRadius: '45%', border: '2px solid black', boxShadow: '0 1rem 3rem black', backgroundSize: '100%' }}>Login</Link>
                </li>
                <li className='navigation__item'>
                    <Link to='/signup' style={{ textDecoration: 'none',fontSize: '1rem', fontWeight: '300', color: 'white', textTransform: 'uppercase', backgroundImage: 'linear-gradient(120deg, #4c4cf2 80%, #4c4cf2 5%, white 92%', padding: '.5rem ', borderRadius: '45%', border: '2px solid black', boxShadow: '0 1rem 3rem black', backgroundSize: '100%' }}>Sign Up</Link>
                </li>
                <li className='navigation__item'>
                    <Link to='/' style={{ textDecoration: 'none', fontSize: '1rem', fontWeight: '300', color: 'white', textTransform: 'uppercase', backgroundImage: 'linear-gradient(120deg, #4c4cf2 80%, #4c4cf2 5%, white 92%', padding: '.5rem', borderRadius: '45%', border: '2px solid black', boxShadow: '0 1rem 3rem black', backgroundSize: '100%' }}>Home</Link>
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