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
                <Link to='/' onClick={() => window.location.reload()} style={{ textDecoration: 'none', fontSize: '2rem', fontWeight: '300', color: 'white', textTransform: 'uppercase', backgroundImage: 'linear-gradient(120deg, #4c4cf2 80%, #4c4cf2 5%, white 92%', padding: '.5rem 1rem', borderRadius: '45%',border:'2px solid black', boxShadow: '0 1rem 3rem black' }}> Logout</Link>
            </div>
        )
    }

    toggleLoginLink() {
        return (
            <div>
                <li className='navigation__item'>
                    <Link to='/login' style={{ textDecoration: 'none', fontSize: '2rem', fontWeight: '300', color: 'white', textTransform: 'uppercase', backgroundImage: 'linear-gradient(120deg, #4c4cf2 80%, #4c4cf2 5%, white 92%', padding: '.5rem 1rem', borderRadius: '45%',border:'2px solid black', boxShadow: '0 1rem 3rem black' }}>Login</Link>
                </li>
                <li className='navigation__item'>
                    <Link to='/signup' style={{ textDecoration: 'none', fontSize: '2rem', fontWeight: '300', color: 'white', textTransform: 'uppercase', backgroundImage: 'linear-gradient(120deg, #4c4cf2 80%, #4c4cf2 5%, white 92%', padding: '.5rem 1rem', borderRadius: '45%', border:'2px solid black', boxShadow: '0 1rem 3rem black' }}>Sign Up</Link>
                </li>
            </div>
        )
    }
    render() {
        return (
            <div className='navigation'>
                <input type='checkbox' className='navigation__checkbox' id='navi-toggle' />
                <label htmlFor='navi-toggle' className='navigation__button'>menu</label>
                <div className='navigation__backgroud'>&nbsp;</div>

                <nav className='navigation__nav'>
                    <ul className='navigation__list'>
                        {TokenService.hasAuthToken()
                            ? this.renderLogoutLink()
                            : this.toggleLoginLink()}
                        <Link to='/' style={{ textDecoration: 'none', fontSize: '2rem', fontWeight: '300', color: 'white', textTransform: 'uppercase', backgroundImage: 'linear-gradient(120deg, #4c4cf2 80%, #4c4cf2 5%, white 92%', padding: '.5rem 1rem', borderRadius: '45%', border:'2px solid black', boxShadow: '0 1rem 3rem black' }}>Home</Link>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default NavBar