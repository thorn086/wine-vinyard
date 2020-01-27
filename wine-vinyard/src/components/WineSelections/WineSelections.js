import React from 'react'
import './WineSelections.css'
import { Link } from 'react-router-dom'

class WineSelections extends React.Component {
    render() {
        const wine = this.props.value
        const wineUrl = wine.replace(/\s/g,'')
        return (
           <li className='wine-link'>
                <Link to={`/${wineUrl}`}>{wine}</Link>
            </li>
            
            
        )
    }
}
export default WineSelections