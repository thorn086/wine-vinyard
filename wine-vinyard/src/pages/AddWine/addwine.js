import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import WineContext from '../../context'
import WineErr from '../../components/WineError/WineErr'
import ValErr from './ValError'
import PropTypes from 'prop-types'
import WineForm from '../../components/WineForm/WineForm'
import API from '../../API'
import TokenService from '../../services/token-services'
import './addwine.css'

class AddWine extends React.Component {
    static propTypes={
        value: PropTypes.string,
        touched: PropTypes.bool
      }
    static defaultProps = {
        history: {
            push: () => { }
        },
    }
    static contextType = WineContext

    constructor(props) {
        super(props);
        this.state = {
            winecat: {
                value: '',
                touched: false
            },
            date: {
                value: ''
               
            },
            company_name: {
                value: '',
                touched: false
            },
            name: {
                value: '',
                touched: false
            },
            content: {
                value: '',
                touched: false
            },
            rating: {
                value: null,
                touched: false
            }

        }
        const year = 1899;
        this.years = Array.from(new Array(200), (val, index) => index + year); 
    }

    //update state

    handleUpdate(e){ 
        const type = e.target.id;
        this.setState({
            [type]: {
                value: e.target.value,
                touched: true
            }
        })
        
    }

    //validate inputs
    validateWincat(){
        const winecat= this.state.winecat.value
        if(winecat === 'Please select one'){
            return 'You must select a Wine Category'
        }
    }
    validateDate(){
        const date = this.state.date.value
        console.log(date)
        if(date === '1899'){
            return 'You must select a date'
        }
    }

    validateComp(){
        const compName = this.state.company_name.value
        if (compName === ''){
            return "You must provide the company name"
        }
    }
    validateName(){
        const name = this.state.name.value
        if (name === ''){
            return "You must provide the name of Wine"
        }
    }
    validateContent(){
        const content = this.state.content.value
        if (content === ''){
            return "You must provide some information about the Wine"
        }
    }
    validateRate(){
        const rate = this.state.rating.value
        if (rate === '0'){
            return "Please grade the Wine"
        }
    }

    handleAddWine = event => {
        event.preventDefault()
        const createNewWine = {
            winecat: event.target['wine-winecat'].value,
            date: event.target['date-input'].value,
            company_name: event.target['company-input'].value,
            name: event.target['wine-name'].value,
            content: event.target['wine-content'].value,
            rating: event.target['wine-rating'].value,
        }
        fetch(`${API.API_ENDPOINT}/wine`,{
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(createNewWine),
        })
        .then(results=>{
            if(!results.ok)
            return results.json().then(e=> Promise.reject(e))
            return results.json()
        })
        .then(wine=>{
            this.context.addWine(wine)
            this.props.history.push('/wine')
        })
        .catch(error=>{
            console.error({error})
        })
    }
    render() {
       
        return (
            <section className='addWine-form'>
                <h2>Add A Wine</h2>
                <NavBar />
                <WineForm onSubmit={this.handleAddWine}>
                    <div className='wine__field'>
                        <WineErr>
                            <label htmlFor='wine-winecat-select'>Wine Color</label>
                            <select id='winecat' name='wine-winecat'  onChange={e=>this.handleUpdate(e)}>
                                <option value='Please select one'>Please select one</option>
                                <option value='Red Wine'>Red Wine</option>
                                <option value='White Wine'>White Wine</option>
                            </select>
                            {this.state.winecat.touched && <ValErr message={this.validateWincat()} />}
                        </WineErr>
                    </div>
                    <div className='wine__field'>
                        <WineErr>
                            <label htmlFor='wine-date-input'>Year</label>
                            <select id='date' name='date-input'size='5' onChange={e=>this.handleUpdate(e)}>
                                {
                                    this.years.map((year, index) => {
                                        return <option key={`year${index}`} value={year}>{year}</option>
                                    })
                                }
                            </select>
                            {<ValErr message={this.validateDate()} />}
                        </WineErr>
                    </div>
                    <div className='wine__field'>
                        <WineErr>
                            <label htmlFor='wine-companyName-input'>Company Name</label>
                            <input type='text' id='company_name' name='company-input' onChange={e=>this.handleUpdate(e)}></input>
                            {this.state.company_name.touched && <ValErr message={this.validateComp()} />}
                        </WineErr>
                    </div>
                    <div className='wine__field'>
                        <WineErr>
                            <label htmlFor='wine-name-input'>Wine Name</label>
                            <input type='text' id='name' name='wine-name' onChange={e=>this.handleUpdate(e)}></input>
                            {this.state.name.touched && <ValErr message={this.validateName()} />}

                        </WineErr>
                    </div>
                    <div className='wine__field'>
                        <WineErr>
                            <label htmlFor='wine-content-input'>Information</label>
                            <textarea  id='content' name='wine-content' onChange={e=>this.handleUpdate(e)}></textarea>
                            {this.state.content.touched && <ValErr message={this.validateContent()} />}

                        </WineErr>
                    </div>
                    <div className='wine__field'>
                        <WineErr>
                            <label htmlFor='wine-rating-input'>Rating</label>
                            <input type='number' min= '0' max='100' id='rating' name='wine-rating' onChange={e=>this.handleUpdate(e)}></input>
                            {this.state.rating.touched && <ValErr message={this.validateRate()} />}
                        </WineErr>
                    </div>
                    <div className='addWine-button'>
                      <button type='submit'  className='addwine-btn'>
                        Add Wine
                      </button>
                      <button className='back' tag='button' onClick={() => this.props.history.goBack()}>Back</button>

                    </div>
                </WineForm>


            </section>
        )
    }
}
export default AddWine