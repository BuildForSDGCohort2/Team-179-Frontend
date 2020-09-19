import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
        <h1 align='center'> Start Farming</h1>
        <div className='cards__container'>
         <div className='cards__wrapper'>
         <ul className='cards__items'>
         <CardItem 
         src='https://ik.imagekit.io/ugyodiq15/kale_C6xhQ9lo1.jpg'
         text='Fresh Kale from the river banks of Ugenya in Uganda'
         label='Open'
         path=''/>
         <CardItem 
         src='https://ik.imagekit.io/ugyodiq15/onions_DuaMIg6VD.jpg'
         text='Onions for sale from the hill of Makueni'
         label='Closed'
         path=''/>
         <CardItem 
         src='https://ik.imagekit.io/ugyodiq15/potatoes_SxUB_GwiE.jpg'
         text='Potatoes being grown by farmers from the valleys of meru'
         label='Open'
         path=''/>
         </ul>  
         </div>
        </div> 
        </div>
    )
}

export default Cards
