import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

class MyWine extends React.Component{
    //add a list of wines from selections and id
    render(){
        return(
        <div className='user__list'>
            <h2>My Current Wine List</h2>
            <NavBar />
            <section className='user__choices'>
                <ul className='user__selections'>
                    <li>choice one</li>
                </ul>
            </section>
        </div>
        )
    }
}
export default MyWine