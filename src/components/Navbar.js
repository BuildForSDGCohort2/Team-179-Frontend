import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
// import User from "User";
// import About from "About";
// import Home from "Home";
// import Produce from "Produce";
function Navbar({ currentUser }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  window.addEventListener('resize', showButton);

  const UserLinks = ({ user }) => {
    // console.log(`Current user from nav bar:: ${user}`);
    // TODO:: over ride signup with logout if user is set
    if (!user) {
      return (
        <Link
          to="/Produce"
          className="nav-links-mobile"
          onClick={closeMobileMenu}
        >
          signup
        </Link>
      );
    }

    return (
      <Link
        to="/logout"
        className="nav-links-mobile"
        onClick={closeMobileMenu}
      >
        logout
      </Link>
    );
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Agrivesty
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Register"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                User
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Produce"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Produce
              </Link>
            </li>
            <li>
              <Link
                to="/Register"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                signup
              </Link>
            </li>
          </ul>
          { button && <Button buttonStyle="btn--outline">SIGN UP</Button> }
        </div>
      </nav>
    </>
  );
}

export default Navbar;
