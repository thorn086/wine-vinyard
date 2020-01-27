import React from 'react'
import Home from '../../pages/Home/Home'

import {Switch, Route} from 'react-router-dom'

import Categories from '../../pages/wine_categories/wine_categories'
import './App.css'

class App extends React.Component {
    render() {
        
          
        return (
            <div>
            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route path='/RedWine'><Categories /></Route>
                <Route path='/WhiteWine'><Categories /></Route>
                <Route path='/AllWine'><Categories /></Route>
            </Switch>
               
                
            </div>
        )
    }
}

export default App