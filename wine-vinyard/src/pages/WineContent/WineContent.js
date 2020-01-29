import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import WineContext from '../../context'
import { getWineItem } from '../../helpers'

//Add test suite

class WineContent extends React.Component {

    static contextType = WineContext
    render() {
        const { wines } = this.context
        const { id } = this.props.match.params
        const info = getWineItem(wines, parseInt(id))

        return (

            <div className='wine-content-page'>
                <h1 className='catigories-title'>Selected Wine</h1>
                <NavBar />
                {info.map(item => {
                    return (
                        <div key={item.id}>
                            <h2 className='individual-info[0]'>{item.name}</h2>
                            <p>{item.date}</p>
                            <p>{item.content}</p>
                            <p>{item.rating}</p>
                        </div>
                    )
                }
                )}

                <button tag='button' onClick={() => this.props.history.goBack()}>Back</button>

            </div>

        )
    }
}
export default WineContent

WineContent.defaultProps = {
    history: {
        goBack: () => { },
    }
}