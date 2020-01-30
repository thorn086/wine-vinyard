import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import WineContext from '../../context'
import Wine from '../../components/Wine/Wine'
import './wine-catigories.css'

class Catigories extends React.Component {
    

   static contextType = WineContext    

    render() {

        return (
            <div className='wine-catigories-page'>
                <h1 className='catigories-title'>Wine Catigories</h1>
                <NavBar />
                <div className='btn-group'>
                    <button tag='button' className='red-btn lt-btn' onClick={this.redWines}>Red Wine</button>
                    <button tag='button' className='red-btn rt-btn'>White Wine</button>
                    <button className='red-btn btn-back' tag='button' onClick={() => this.props.history.goBack()}>Back</button>
                </div>
                    <Wine />
            </div>
        )
    }
}
export default Catigories

Catigories.defaultProps = {
    history: {
        goBack: () => { },
    }
}