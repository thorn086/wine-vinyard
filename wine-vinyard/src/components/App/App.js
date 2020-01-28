import React from 'react'
import Home from '../../pages/Home/Home'
import dummyStore from '../../dummy-store'
import { Switch, Route } from 'react-router-dom'
import WineContent from '../../pages/WineContent'
import Categories from '../../pages/wine_categories/wine_categories'
import './App.css'
import WineContext from '../../context'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            rdWine: [],
            wtWine: [],
            wines: []
        }
    }



    componentDidMount() {
        setTimeout(() => this.setState(dummyStore), 600)
        
    }

    render() {
        const wineContext = {
            wines: this.state.wines,
                       
        }
        
        return (
            <WineContext.Provider value={wineContext}>    
                <div>
                    <Switch>
                        <Route exact path='/'><Home  /></Route>
                        <Route exact path='/wine'><Categories /></Route>
                        <Route path='/wine/:id' component={WineContent}></Route>
                    </Switch>
                </div>
            </WineContext.Provider>
        )
    }
}

export default App