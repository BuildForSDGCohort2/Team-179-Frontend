import React from 'react';
// import { Link } from 'react-router-dom';


function CardTextItem() {
    return (
        <>
        <li className='cards__item'>
        {/* <Link className="cards__item__link"> */}
        <div className='cards__item__info'>
        <h3 className='cards__item__text'>
        We use Data to inform Both 
        farmers and Investors on what
        is most Profitable to them
        </h3>
        <h6 className='cards__item__text'>
        We give farmers and Investors tools
        to help them come up with the best grow
        plan that will maximize their resources and
        ensure that each individual ends up profitable
        and food is provided for the masses
        </h6>
        </div>
        {/* </Link> */}
        </li>

        </>
    )
}

export default CardTextItem;