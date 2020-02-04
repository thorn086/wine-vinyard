import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import WineContext from '../../context'

class AddWine extends React.Component{
    static defaultProps = {
        history: {
          push: () => { }
        },
      }
      static contextType = WineContext
    
      constructor(props){
        super(props);
        this.state={
            wincat:{
                value:'',
                touched:false
            },
            date:new Date(),
            company_name:{
                value:'',
                touched:false
            },
            name:{
                value:'',
                touched:false
            },
            content:{
                value:'',
                touched:false
            },
            rating:{
                value:null,
                touched:false
            }
        }
    }
    render(){
        const {wines}=this.context
        return(
            <section className='addWine-form'>
                <h2>Add A Wine</h2>
                <NavBar />


            </section>
        )
    }
}
export default AddWine