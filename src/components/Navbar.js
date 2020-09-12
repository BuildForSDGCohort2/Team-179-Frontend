import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Button } from './Button'
// import User from "User";
// import About from "About";
// import Home from "Home";
// import Produce from "Produce";
function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closedMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerwidth <= 960){
            setButton(false)
        }
        else {
            setButton(true);
        }
    }
    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
        <nav className='navbar'>
        <div className='navbar-container'>
        <Link to ='/' className='navbar-logo' onClick={closedMobileMenu}>
        Agrivesty
        </Link>
        <div className='menu-icon' onClick={handleClick}>
        <i className={ click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
        <Link to='/'
        className='nav-links'
        onClick={ closedMobileMenu }>
                        Home
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/user'
                    className='nav-links'
                    onClick={ closedMobileMenu }>
                        User
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/about'
                    className='nav-links'
                    onClick={ closedMobileMenu }>
                        About
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/Produce'
                    className='nav-links'
                    onClick={ closedMobileMenu }>
                        Produce
                    </Link>
                    </li>
                    <li>
                    <Link to='/Produce'
                    className='nav-links-mobile'
                    onClick={ closedMobileMenu }>
                        signup
                    </Link>
                    </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
        </nav>
        </>
    )
}

export default Navbar;