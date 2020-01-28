import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import WineContext from '../../context'
import Wine from '../../components/Wine/Wine'


class Categories extends React.Component {
    static contextType = WineContext
    render() {
        const { wines } = this.context
        console.log(wines)
        return (
            <div className='wine-catigories-page'>
                <h1 className='catigories-title'>Wine Categories</h1>
                <NavBar />
                <button tag='button' className='red-btn'>Red Wine</button>
                <button tag='button' className='red-btn'>White Wine</button>
                <ul>
                    <Wine />
                </ul>
                

            </div>
        )
    }
}
export default Categories

Categories.defaultProps = {
    history: {
        goBack: () => { },
    }
}