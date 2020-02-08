import React from 'react'
import { Link } from 'react-router-dom'
import './WineMenu.css'


class WineMenu extends React.Component {

    render() {

        return (

            <section className='wine-menu'>

                <div className='wine-btn btn-white btn-animated'>
                    <Link to='/login' style={{ textDecoration:'none', color:'black'}}>Login</Link>
                </div>
            </section >
        )
    }
}
export default WineMenu