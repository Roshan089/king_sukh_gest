import React, { useEffect } from 'react'
import { TiThMenu } from "react-icons/ti";


const Header = () => {
    useEffect(() => {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn.querySelector("i");

    const toggleMenu = () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    };

    const closeMenu = () => {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    };

    menuBtn.addEventListener("click", toggleMenu);
    navLinks.addEventListener("click", closeMenu);

    return () => {
      menuBtn.removeEventListener("click", toggleMenu);
      navLinks.removeEventListener("click", closeMenu);
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
                  <div className="nav__menu__btn" id="menu-btn">
                      <TiThMenu className="ri-menu-line" />

             
            </div>
          </div>
          <ul className="nav__links" id="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#rooms">Rooms</a></li>
            <li><a href="#gallary">Gallary</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="https://wa.link/at5ion">
            <button className="btn nav__btn">BOOK NOW</button>
          </a>
        </nav>
        <div className="section__container header__container" id="home">
          <p>Simple - Unique - Friendly</p>
          <h1>Make Yourself At Home<br />In Our <span>Guest House</span>.</h1>
        </div>
      </header>
  )
}

export default Header
