import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
//add a list of wines from selections and id
class UserWine extends React.Component {

    render() {
        return (
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
export default UserWine