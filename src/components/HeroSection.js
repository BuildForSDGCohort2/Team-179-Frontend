import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
        <image src="" alt='Farmer In the Farm'/>
        <h1 className='hero-text'> Be Part Of The Food Security Revolution</h1>
        <div className="hero-btns">
        <Button className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'>
        Join US
        </Button>
        </div>
        </div>
    )
}

export default HeroSection;