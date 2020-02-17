import React from 'react'
import { Link } from 'react-router-dom'
import './WineMenu.css'
import TokenService from '../../services/token-services'


class WineMenu extends React.Component {
    
renderLogedOut(){
    return(
        <button className='wine-btn btn-white btn-animated'>
        <Link to='/login' style={{ textDecoration:'none', color:'black',fontFamily: 'Sriracha cursive',padding:'20px'}}>Login</Link>
    </button>
    )
}
renderLogin(){
return(
    <button className='wine-btn btn-white btn-animated'>
    <Link to='/wine' style={{ textDecoration:'none', color:'black',fontFamily: 'Sriracha cursive',padding:'20px'}}>Wines</Link>
</button>
)
}

    render() {
        return (
            <section className='wine-menu'>

                <div>
                    {TokenService.hasAuthToken() 
                    ? this.renderLogin()
                    : this.renderLogedOut()}
                </div>
            </section >
        )
    }
}
export default WineMenu