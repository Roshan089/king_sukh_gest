import React from 'react'
import './contact.css'
import '../App.css'
import { FaLocationPin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import SocialMedia from '../components/social media/social_media';




const Contact = () => {
  return (
    <section id="contact" className="section1">
        <div className="container1">
          <div className="contactInfo1">
            <h2>Contact Us</h2>
            <div className="contactDetails">
              <ul>
                <li>
                  <FaLocationPin />
                  <span>Beside Barshal Water Tank,<br />
                    Manpur, Barhanti,<br />
                    West Bengal 723156</span>
                </li>
                <li>
                  <MdMail />
                  <span><a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></span>
                </li>
                <li>
                  <IoCall />

                  <span><a href="tel:+919007062180"> +91 9007062180 </a></span>
                </li>
              </ul>
            </div>
           
          <SocialMedia/>


          </div>
          <div className="contactForm1">
            <h2>Send a Message</h2>
            <div className="formBox1">
              <div className="inputBox1 w50">
                <input type="text" name="" required />
                <span>First Name</span>
              </div>
              <div className="inputBox1 w50">
                <input type="text" required />
                <span>Last Name</span>
              </div>
              <div className="inputBox1 w50">
                <input type="email" required />
                <span>Email Address</span>
              </div>
              <div className="inputBox1 w50">
                <input type="text" required />
                <span>Mobile Number</span>
              </div>
              <div className="inputBox1 w100">
                <textarea required></textarea>
                <span>Write your message here...</span>
              </div>
              <div className="inputBox1 w100">
                <input type="submit" value="Send" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact
