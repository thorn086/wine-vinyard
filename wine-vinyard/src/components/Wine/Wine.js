import React from 'react'
import WineContext from '../../context'
import {Link} from 'react-router-dom'

class Wine extends React.Component {
    static contextType = WineContext

    render() {
        const { wines } = this.context


        return (
            <div>
                {wines.map(wine => 
                    <li key={wine.id}>
                        <h4 className='wine-name'>
                            <Link to={`/wine/${wine.id}`}>{wine.name}</Link>
                               {'  '}| {wine.wineCat}
                        </h4>
                        <div className='company'>{wine.company_name}</div>
                        {''}
                    </li>
                )}
            </div>
        )
    }
}
export default Wine