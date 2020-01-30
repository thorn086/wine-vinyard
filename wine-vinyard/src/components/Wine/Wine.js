import React from 'react'
import WineContext from '../../context'
import { Link } from 'react-router-dom'
import './Wine.css'

class Wine extends React.Component {
    static contextType = WineContext

    render() {
        const { wines } = this.context
        console.log(wines)

        return (
            <div>
                {wines.map(wine =>
                    <div key={wine.id} className='wine-items'>
                        <h4 className='wine-name'>
                            <Link to={`/wine/${wine.id}`} style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }}>{wine.name}</Link>
                            {'  '}| {wine.wineCat}
                        </h4>
                        <div className='company'>{wine.company_name}
                        <p className='company-title'>Company Name</p>
                        </div>
                         
                        
                    </div>
                )}
            </div>
        )
    }
}
export default Wine