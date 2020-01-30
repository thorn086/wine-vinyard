import React from 'react'
import { Link } from 'react-router-dom'
import './WineMenu.css'


class WineMenu extends React.Component {

    render() {

        return (

            <section className='wine-menu'>

                <div className='wine-btn btn-white'>
                    <Link to='/wine' style={{ textDecoration:'none'}}>All Wines</Link>
                </div>
            </section >
        )
    }
}
export default WineMenu