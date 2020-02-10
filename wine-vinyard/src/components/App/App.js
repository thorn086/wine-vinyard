import React from 'react'
import Home from '../../pages/Home/Home'
import API from '../../API'
import { Switch, Route } from 'react-router-dom'
import WineContent from '../../pages/WineContent/WineContent'
import Catigories from '../../pages/wine_catigories/wine_catigories'
import SignUp from '../../pages/SignUp/SignUp'
import Login from '../../pages/Login/Login'
import AddWine from '../../pages/AddWine/addwine'
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


    componentDidMount() {
     fetch(`${API.API_ENDPOINT}/wine`)
        .then (winesRes =>{
            if(!winesRes.ok){
                throw new Error(winesRes.statusText)
            }
            return winesRes.json()
            
        })
        .then(response => this.setState({wines:response}))
        .catch(err=>{
            this.setState({
                error: 'Sorry could not get wines as this time.'
            })
        })
        //to do: all wine api here to set state
    }

    handleAddWine=wine=>{
        this.setState({
            wines:[
                ...this.state.wines,wine
            ]
        })
    }

    handleDeleteWine=id=>{
        this.setState({
            wines:this.state.wines.filter(wine=>wine.id !== id)
        })
    }

    render() {
        const wineContext = {
            wines: this.state.wines,
            addWine: this.handleAddWine,
            deleteWine:this.handleDeleteWine
        }

        return (
            <WineContext.Provider value={wineContext}>
                <Switch>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/wine'><Catigories /></Route>
                    <Route path='/wine/:id' component={WineContent}></Route>
                    <Route path='/signup'><SignUp /></Route>
                    <Route path='/Login' component={Login}></Route>
                    <Route path='/addwine' component={AddWine}></Route>
                </Switch>   
            </WineContext.Provider>
        )
    }
}

export default App