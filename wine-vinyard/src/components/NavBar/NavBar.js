import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

class NavBar extends React.Component{
    render(){
        return(
                <nav className='nav-bar'>
                   <Link to='/'>Home</Link>
                   {'||'}
                   <Link to='/login'>Login</Link>
                   {'||'}
                   <Link to='/signup'>Sign Up</Link>
                </nav>
        )
    }
}
export default NavBar