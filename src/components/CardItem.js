  
import React from 'react';
import { render } from "react-dom";
import { Link } from 'react-router-dom';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
          <FontAwesomeIcon icon={faHome} size="lg" />
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
          <div className='farm__info'>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;