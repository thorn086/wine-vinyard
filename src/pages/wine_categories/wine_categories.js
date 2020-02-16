import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import WineContext from '../../context'
import Wine from '../../components/Wine/Wine'
import { Link, withRouter } from 'react-router-dom'
import './wine-categories.css'

class categories extends React.Component {

    static contextType = WineContext

    constructor(props) {
        super(props)
        this.state = {
            type: 'All'
        }
    }




    handleWineSelection = e => {
        const type = e.currentTarget.textContent
        this.setState({
            type: type
        })
    }


    render() {

        const { type } = this.state



        return (
            <div className='wine-categories-page'>
                <h1 className='title__page wine'>Wine Categories</h1>
                <NavBar />
                <div className='instructions'>
                    <p className='text'>Click on the Wine name to see what peolpe are saying. Otherwise, feel free to add your own by selecting "ADD A WINE" at the bottom.
                     You can also sort wine by their color by selecting red or white.</p>
                </div>
                <div className='btn-group'>
                    <button tag='button' className='red-btn lt-btn rw-btn' onClick={this.handleWineSelection} ><span className='red'>Red</span> Wine</button>
                    <button tag='button' className='red-btn rt-btn ww-btn' onClick={this.handleWineSelection} ><span className='white'>White</span> Wine</button>
                    <button className='red-btn add_wine'>
                        <Link to='/addwine' style={{ textDecoration: 'none', fontSize: '16px', color: ' rgb(252, 252, 252)', padding: '1px', textAlign: 'center' }}><span className='white'>ADD</span> Wine</Link>
                    </button>
                </div>
                <Wine type={type} />


            </div>
        )
    }
}
export default withRouter(categories)



