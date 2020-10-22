import React from 'react';
import '../App.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
        <image src="" alt='Farmer In the Farm'/>
        <h1 className='hero-text'> Be Part Of The Food Security Revolution</h1>
        <div className="hero-btns">
        <Link to='/Register'>
        <Button  size="large" variant="contained" color="primary">
        Join US
        </Button>
        </Link>
        </div>
        </div>
    )
}

export default HeroSection;
