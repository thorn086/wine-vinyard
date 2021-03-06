import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import WineContext from '../../context'
import TokenService from '../../services/token-services'
import { withRouter } from 'react-router-dom'
import { getWineItem } from '../../helpers'
import API from '../../API'
import './WineContent.css'


class WineContent extends React.Component {
    static defaultProps={
        wines:[]
    }

    static contextType = WineContext

    handleDeleteWine = event => {
        event.preventDefault()
        const { id } = this.props.match.params
        fetch(`${API.API_ENDPOINT}/wine/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(result => {
                if (!result.ok)
                    return result.json().then(event => Promise.reject(event))
            })
            .then(() => {
                this.props.history.push('/wine')
                this.context.deleteWine(parseInt(id, 10))
                
            })
            .catch(error => {
                console.log({ error })
            })
    }

    render() {

        const { wines } = this.context
        const { id } = this.props.match.params
        const info = getWineItem(wines, parseInt(id))
       
        return (

            <div className='wine-content-page'>
                <h1 className='title__page s_wine'>Selected Wine</h1>
                <NavBar />
                {info.map(item => {
                   
                    return (
                        <div className='wine-selection' key={item.id}>
                            <section className='wine-info'>
                                <h2 className='individual-info'>{item.name}</h2>
                                <p> Year made:  {item.date}</p>
                                <p>Thoughts:  {item.content}</p>
                                <p>Rating:  {item.rating}</p>
                                <p>Wine added by UserID ( {item.author} )</p>
                            </section>
                            <section className='submit-btns'>
                                <button className='back-btn' tag='button' onClick={() => this.props.history.goBack()}>Back</button>
                                <button className='red-btn rt-btn' type='button' onClick={this.handleDeleteWine}><span className=' wine__delete'>DELETE</span></button>
                            </section>
                        </div>
                    )
                }
                )}
            </div>

        )
    }
}
export default withRouter(WineContent)

