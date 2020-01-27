import React from 'react'
import WineSelections from '../WineSelections/WineSelections'
import './WineMenu.css'


class WineMenu extends React.Component {
    
    render() {
        const wineList = ['Red Wine', 'White Wine', 'All Wine']
        const wineItems=  wineList.map(wine=>
          <WineSelections key={wine.toString()} value={wine}/>)
        return (
            
            <section className='wine-menu'>
                <ul>
                  {wineItems}
               </ul>
            </section >
        )
    }
}
export default WineMenu