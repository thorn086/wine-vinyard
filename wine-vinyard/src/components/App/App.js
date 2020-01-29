import React from 'react'
import Home from '../../pages/Home/Home'
import dummyStore from '../../dummy-store'
import { Switch, Route } from 'react-router-dom'
import WineContent from '../../pages/WineContent/WineContent'
import Categories from '../../pages/wine_categories/wine_categories'
import SignUp from '../../pages/SignUp/SignUp'
import './App.css'
import WineContext from '../../context'
class App extends React.Component {
    constructor(props) {
        super(props)
     this.state={
         wines:[],
        }
        //fetch(apiURL).then(res => res.json).then(res => this.state = res.wines)
 }




    async componentDidMount() {
        this.setState(dummyStore)
        //to do: all wine api here to set state
    }

    render() {
        const wineContext = {
            wines: this.state.wines,
                       
        }
        
        return (
            <WineContext.Provider value={wineContext}>    
                <div>
                    <Switch className='route-paths' aria-live='polite'>
                        <Route exact path='/'><Home  /></Route>
                        <Route exact path='/wine'><Categories /></Route>
                        <Route  path='/wine/:id'><WineContent /></Route>
                        <Route path='/signup'><SignUp /></Route>
                    </Switch>
                </div>
            </WineContext.Provider>
        )
    }
}

export default App