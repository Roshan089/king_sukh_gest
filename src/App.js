import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './App.css'; // Make sure you have your CSS in this file
import Contact from './components/Contact';
import Gallary from './components/Gallary';

function App() {

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

  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    // header container
    ScrollReveal().reveal(".header__container p", { ...scrollRevealOption });
    ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, delay: 500 });

    // about container
    ScrollReveal().reveal(".about__image img", { ...scrollRevealOption, origin: "left" });
    ScrollReveal().reveal(".about__content .section__subheader", { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal(".about__content .section__header", { ...scrollRevealOption, delay: 1000 });
    ScrollReveal().reveal(".about__content .section__description", { ...scrollRevealOption, delay: 1500 });
    ScrollReveal().reveal(".about__btn", { ...scrollRevealOption, delay: 2000 });

    // room container
    ScrollReveal().reveal(".room__card", { ...scrollRevealOption, interval: 500 });

    // service container
    ScrollReveal().reveal(".service__list li", { ...scrollRevealOption, interval: 500, origin: "right" });
  }, []);

  return (
    <div>
      <header className="header">
        <nav>
          <div className="nav__bar">
            <div className="logo">
              <a href="https://wa.link/at5ion">
                <span style={{ color: 'aliceblue' }}>Kingsukh Guest House</span>
              </a>
            </div>
            <div className="nav__menu__btn" id="menu-btn">
              <i className="ri-menu-line"></i>
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

      <section className="section__container booking__container">
        <div className="booking__form">
          <div className="input__group input__btn">
            <a href="https://wa.link/at5ion">
              <button className="btn">BOOK NOW</button>
            </a>
          </div>
        </div>
      </section>

      <section className="section__container about__container" id="about">
        <div className="about__image">
          <img src="assets/out.jpg" alt="about" />
        </div>
        <div className="about__content">
          <p className="section__subheader">ABOUT US</p>
          <h2 className="section__header">The Best Holidays Start Here!</h2>
          <p className="section__description">
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay. <br />
            <h4><a href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a></h4>
            <h4><a href="tel:+919007062180">Contact us: +91 9007062180</a></h4>
          </p>
          <div className="about__btn">
            <a href="https://wa.link/at5ion">
              <button className="btn">BOOK NOW</button>
            </a>
          </div>
        </div>
      </section>

      <section className="section__container room__container" id="rooms">
        <p className="section__subheader">OUR LIVING ROOM</p>
        <h2 className="section__header">The Most Memorable Rest Time Starts Here.</h2>
        <div className="room__grid">
          <div className="room__card">
            <div className="room__card__image">
              <img src="assets/small.jpg" alt="room" />
              <div className="room__card__icons">
                <span><i className="ri-heart-fill"></i></span>
                <span><i className="ri-paint-fill"></i></span>
                <span><i className="ri-shield-star-line"></i></span>
              </div>
            </div>
            <div className="room__card__details">
              <h4>Cozy Haven Room</h4>
              <p>Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.</p>
              <h5>Starting from <span>Rs. 1000/night</span></h5>
              <a href="https://wa.link/at5ion">
                <button className="btn">BOOK NOW</button>
              </a>
            </div>
          </div>
          <div className="room__card">
            <div className="room__card__image">
              <img src="assets/large.jpg" alt="room" />
              <div className="room__card__icons">
                <span><i className="ri-heart-fill"></i></span>
                <span><i className="ri-paint-fill"></i></span>
                <span><i className="ri-shield-star-line"></i></span>
              </div>
            </div>
            <div className="room__card__details">
              <h4>Spacious Serenity Suite</h4>
              <p>Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.</p>
              <h5>Starting from <span>Rs. 1500/night</span></h5>
              <a href="https://wa.link/at5ion">
                <button className="btn">BOOK NOW</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="service" id="service">
        <div className="section__container service__container">
          <div className="service__content">
            <p className="section__subheader">SERVICES</p>
            <h2 className="section__header">Strive Only For The Best.</h2>
            <ul className="service__list">
              <li>
                <span><i className="ri-shield-star-line"></i></span>
                High Class Security
              </li>
              <li>
                <span><i className="ri-24-hours-line"></i></span>
                24 Hours Room Service
              </li>
              <li>
                <span><i className="ri-wifi-line"></i></span>
                Free Wifi Facility
              </li>
              <li>
                <span><i className="ri-home-4-line"></i></span>
                Family Rooms
              </li>
              <li>
                <span><i className="ri-service-line"></i></span>
                Friendly Environment
              </li>
              <li>
                <span><i className="ri-truck-line"></i></span>
                Pick & Drop Facility
              </li>
              <li>
                <span><i className="ri-map-2-line"></i></span>
                Tourist Guide Support
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section__container banner__container">
        <div className="banner__content">
          <div className="banner__card">
            <h4>100+</h4>
            <p>Bookings Completed</p>
          </div>
          <div className="banner__card">
            <h4>150+</h4>
            <p>Happy Customers</p>
          </div>
        </div>
      </section>

      <br /><br />

      <Gallary/>

      <Contact/>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5017351225647!2d86.85721547510981!3d23.586332378782714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1705088034844!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kingsukh Guest House Location"
        ></iframe>
      </div>

      <footer className="footer">
        <div className="section__container footer__container">
          <div className="footer__col">
            <div className="logo">
              <a href="#home"><h4>Kingsukh Guest House</h4></a>
            </div>
            <p className="section__description">
              Discover a world of comfort, luxury, and adventure as you explore
              our curated selection of hotels, making every moment of your getaway
              truly extraordinary.
            </p>
            <a href="https://wa.link/at5ion">
              <button className="btn">BOOK NOW</button>
            </a>
          </div>
          <div className="footer__col">
            <h4>QUICK LINKS</h4>
            <ul className="footer__links">
              <li><a href="#">Browse Destinations</a></li>
              <li><a href="#">Special Offers & Packages</a></li>
              <li><a href="#">Room Types & Amenities</a></li>
              <li><a href="#">Customer Reviews & Ratings</a></li>
              <li><a href="#">Travel Tips & Guides</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>OUR SERVICES</h4>
            <ul className="footer__links">
              <li><a href="#">Concierge Assistance</a></li>
              <li><a href="#">Flexible Booking Options</a></li>
              <li><a href="#">Airport Transfers</a></li>
              <li><a href="#">Wellness & Recreation</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>CONTACT US</h4>
            <ul className="footer__links">
              <li><a href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a></li>
              <li><a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></li>
              <li><a href="tel:+919007062180">+91 9007062180</a></li>
            </ul>
            <div className="footer__socials">
              <a href="#"><img src="assets/facebook.png" alt="facebook" /></a>
              <a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank" rel="noopener noreferrer"><img src="assets/instagram.png" alt="instagram" /></a>
              <a href="#"><img src="assets/youtube.png" alt="youtube" /></a>
              <a href="#"><img src="assets/twitter.png" alt="twitter" /></a>
            </div>
          </div>
        </div>
        <div className="footer__bar">
          Copyright © 2024 Kingsukh Guest House. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
