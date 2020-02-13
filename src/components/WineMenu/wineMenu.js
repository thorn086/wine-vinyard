import React from 'react'
import { Link } from 'react-router-dom'
import './WineMenu.css'
import TokenService from '../../services/token-services'


class WineMenu extends React.Component {
    
renderLogedOut(){
    return(
        <div className='wine-btn btn-white btn-animated'>
        <Link to='/login' style={{ textDecoration:'none', color:'black'}}>Login</Link>
    </div>
    )
}
renderLogin(){
return(
    <div className='wine-btn btn-white btn-animated'>
    <Link to='/wine' style={{ textDecoration:'none', color:'black'}}>Wines</Link>
</div>
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