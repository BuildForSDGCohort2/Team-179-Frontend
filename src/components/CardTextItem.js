import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function CardTextItem() {
    return (
        <>
        <li className='cards__item'>
        <Link className="cards__item__link">
        <div className='cards__item__info'>
        <h5 className='cards__item__text'>
        </h5>
        </div>
        </Link>
        </li>

        </>
    )
}

export default CardTextItem;