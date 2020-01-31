import React from 'react'
import Home from '../../pages/Home/Home'
import dummyStore from '../../dummy-store'
import { Switch, Route } from 'react-router-dom'
import WineContent from '../../pages/WineContent/WineContent'
import Catigories from '../../pages/wine_catigories/wine_catigories'
import SignUp from '../../pages/SignUp/SignUp'
import Login from '../../pages/Login/Login'
import UserWine from '../../pages/UserWine/UserWine'
import './App.css'
import WineContext from '../../context'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
                <Switch>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/wine'><Catigories /></Route>
                    <Route path='/wine/:id' component={WineContent}></Route>
                    <Route path='/userlist'><UserWine /></Route>
                    <Route path='/signup'><SignUp /></Route>
                    <Route path='/Login' component={Login}></Route>
                </Switch>
                
            </WineContext.Provider>
        )
    }
}

export default App