import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../App.css'; // Ensure this file exists and has relevant styles
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Map from './Map';
import Slider from './slider/slider';
import Banner from './counting';
import Button from './button/Button';
import   Room  from "./Room"
import Service from './Service';
import About from './About';

const Home = () => {

  useEffect(() => {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    
    if (menuBtn && navLinks) {
      const menuBtnIcon = menuBtn.querySelector("i");

      const toggleMenu = () => {
        navLinks.classList.toggle("open");
        const isOpen = navLinks.classList.contains("open");
        if (menuBtnIcon) {
          menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
        }
      };

      const closeMenu = () => {
        navLinks.classList.remove("open");
        if (menuBtnIcon) {
          menuBtnIcon.setAttribute("class", "ri-menu-line");
        }
      };

      menuBtn.addEventListener("click", toggleMenu);
      navLinks.addEventListener("click", closeMenu);

      return () => {
        menuBtn.removeEventListener("click", toggleMenu);
        navLinks.removeEventListener("click", closeMenu);
      };
    }
  }, []);

  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".header__container p", { ...scrollRevealOption });
    ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, delay: 500 });

    ScrollReveal().reveal(".about__image img", { ...scrollRevealOption, origin: "left" });
    ScrollReveal().reveal(".about__content .section__subheader", { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal(".about__content .section__header", { ...scrollRevealOption, delay: 1000 });
    ScrollReveal().reveal(".about__content .section__description", { ...scrollRevealOption, delay: 1500 });
    ScrollReveal().reveal(".about__btn", { ...scrollRevealOption, delay: 2000 });

    ScrollReveal().reveal(".room__card", { ...scrollRevealOption, interval: 500 });

    ScrollReveal().reveal(".service__list li", { ...scrollRevealOption, interval: 500, origin: "right" });
  }, []);

  return (
    <div  id='home'>
      <section className="section__container booking__container">
        <div className="booking__form">
          <div className="input__group input__btn">
            <a href="https://wa.link/at5ion">
              <Button />
            </a>
          </div>
        </div>
      </section>
<About/>
  <Room/>
    <Service/>

      <Banner />

      <br /><br />

      <Slider/>

      <Contact />

      <Map />

      <Footer />
    </div>
  );
}

export default Home;
