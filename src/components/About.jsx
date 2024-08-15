import React from 'react'
import img from "../assets/out.jpg";


const About = () => {
  return (
   
<section className="section__container about__container" id="about">
  <div className="about__image">
    <img src={img} alt="about" />
  </div>
  <div className="about__content">
    <p className="section__subheader">ABOUT US</p>
    <h2 className="section__header">The Best Holidays Start Here!</h2>
    <p className="section__description">
      Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
    </p>
    <div className="contact-info">
      <h4><a href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a></h4>
      <h4><a href="tel:+919007062180">Contact us: +91 9007062180</a></h4>
    </div>
    <div className="about__btn">
      <a href="https://wa.link/at5ion">
        <button className="btn">BOOK NOW</button>
      </a>
    </div>
  </div>
</section>
  )
}

export default About
