import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

class NavBar extends React.Component{
    render(){
        return(
                <nav className='nav-bar'>
                   <Link to='/'>Home</Link>
                </nav>
        )
    }
}
export default NavBar