import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import WineContext from '../../context'
import Wine from '../../components/Wine/Wine'
import { Link, withRouter } from 'react-router-dom'
import ScrollToTop from 'react-scroll-up'
import './wine-catigories.css'

class Catigories extends React.Component {

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
            <div className='wine-catigories-page'>
                <h1 className='catigories-title'>Wine Catigories</h1>
                <NavBar />
                <div className='btn-group'>
                    <button tag='button' className='red-btn lt-btn rw-btn' onClick={this.handleWineSelection} >Red Wine</button>
                    <button tag='button' className='red-btn rt-btn ww-btn' onClick={this.handleWineSelection} >White Wine</button>
                </div>
                <Wine type={type} />
                <div className='red-btn btn-back'>
                    <Link to='/addwine' style={{ textDecoration: 'none', fontSize: '11px', color: 'black', }}>Add a Wine</Link>
                </div>
                
                    <ScrollToTop  showUnder={160}><span className='top-btn' >Top</span></ScrollToTop>
                
                <div className='red-btn btn-back'>
                    <Link to='/' style={{ textDecoration: 'none', fontSize: '11px', color: 'black', }}>Home</Link>
                </div>
            </div>
        )
    }
}
export default withRouter(Catigories)



