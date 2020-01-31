import React from 'react'
import { Link } from 'react-router-dom'
import './WineMenu.css'


class WineMenu extends React.Component {

    render() {

        return (

            <section className='wine-menu'>

                <div className='wine-btn btn-white btn-animated'>
                    <Link to='/wine' style={{ textDecoration:'none', color:'black'}}>All Wines</Link>
                </div>
                <div className='wine-btn btn-white btn-animated btn-bottom'>
                    <Link to='/userlist' style={{ textDecoration:'none', color:'black'}}>My Wines</Link>
                </div>
            </section >
        )
    }
}
export default WineMenu