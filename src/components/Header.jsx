import React, { useState, useRef, useEffect } from 'react';
import { TiThMenu, TiTimes } from "react-icons/ti";
import Button from './button/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinksRef = useRef(null);

  // Toggle menu open state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    // Close menu when clicking outside of the nav links
    const handleClickOutside = (event) => {
      if (navLinksRef.current && !navLinksRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <nav>
        <div className="nav__bar">
          <div className="logo">
            <a href="https://wa.link/at5ion">
              <span style={{ color: 'aliceblue' }}>Kingsukh Guest House</span>
            </a>
          </div>
          <div className="nav__menu__btn" onClick={toggleMenu}>
            {menuOpen ? <TiTimes /> : <TiThMenu />}
          </div>
        </div>
        <ul
          className={`nav__links ${menuOpen ? 'open' : ''}`}
          ref={navLinksRef}
          onClick={closeMenu}
        >
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#rooms">Rooms</a></li>
          <li><a href="#gallary">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a className='hed_btn' href="https://wa.link/at5ion">
          <button className="btn">BOOK NOW</button>
        </a>
      </nav>
      <div className="section__container header__container" id="home">
        <p>Simple - Unique - Friendly</p>
        <h1>Make Yourself At Home<br />In Our <span>Guest House</span>.</h1>
      </div>
    </header>
  );
};

export default Header;
