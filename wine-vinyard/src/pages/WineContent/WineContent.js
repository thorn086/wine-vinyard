import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import WineContext from '../../context'
import { getWineItem } from '../../helpers'
import './WineContent.css'
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
                        <div className='wine-selection' key={item.id}>
                            <section className='wine-info'>
                                <h2 className='individual-info'>{item.name}</h2>
                                <p>{item.date}</p>
                                <p>{item.content}</p>
                                <p>{item.rating}</p>
                            </section>
                            <section className='wine-comments'>
                                <p className='comment-title'>Add a comment about this wine</p>
                                <textarea className='text-comment'></textarea>
                            </section>
                            <section className='submit-btns'>
                                <button className='add-comment-btn'tag='button'>Submit</button>
                                <button className='back-btn' tag='button' onClick={() => this.props.history.goBack()}>Back</button>
                            </section>
                        </div>
                    )
                }
                )}
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