import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import WineContext from '../context'
import {getWineItem} from '../helpers'


class WineContent extends React.Component {
    
    static contextType = WineContext
    render() {
        const {wines}=this.context
        const { id} = this.props.match.params
        console.log(id)
        const info = getWineItem(wines,parseInt(id))
       

        console.log("info",info)
        console.log('info name',)
        return (
            <div className='wine-content-page'>
                <h1 className='catigories-title'>Selected Wine</h1>
                <NavBar />
              <h2 className='individual-wine'>name</h2>
                
            <button tag='button' onClick={()=> this.props.history.goBack()}>Back</button>

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