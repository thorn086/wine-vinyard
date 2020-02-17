import React from 'react'
import WineContext from '../../context'
import { Link } from 'react-router-dom'
import './Wine.css'

class Wine extends React.Component {

    static contextType = WineContext



    render() {
        const { type } = this.props;
        let { wines } = this.context
        if (type !== 'All') {
            wines = this.context.wines.filter(wine => wine.winecat === type)
        }

        return (
            <div>
                {wines.map(wine =>
                    <div key={wine.id} className='wine-items'>
                        <h4 className='wine-name'>
                            <Link to={`/wine/${wine.id}`} style={{ textDecoration: 'none', fontSize: '25px',color: '#f8fc3a',textShadow: '2px 2px black',fontFamily: 'Sriracha, cursive' }}>{wine.name}</Link>
                             <div className='class__name'>{wine.winecat}</div>
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