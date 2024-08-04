import React from 'react'
import img1 from '../assets/out.jpg'
import img2 from '../assets/ayodhya.webp'
import img3 from '../assets/large.jpg'
import img4 from '../assets/palash.webp'
import img5 from '../assets/small.jpg'
import img6 from '../assets/baranti.webp'
import img7 from '../assets/recep.jpg'
import img8 from '../assets/flower.jpg'
import img9 from '../assets/room1.jpg'
import img10 from '../assets/mithonDam.webp'

import './gallary.css'
const Gallary = () => {
  return (
   <section id="gallary">
        <div className="about__content">
          <p className="section__subheader" style={{ textAlign: 'center' }}>GALLARY</p>
        </div>
        <br />
        <div className="container11">
          <div className="box11 a"><img src={img1} alt="Gallery Image 1" /></div>
          <div className="box11 b"><img src={img2} alt="Gallery Image 2" /></div>
          <div className="box11 c"><img src={img3} alt="Gallery Image 3" /></div>
          <div className="box11 d"><img src={img4} alt="Gallery Image 4" /></div>
          <div className="box11 e"><img src={img5} alt="Gallery Image 5" /></div>
          <div className="box11 f"><img src={img6} alt="Gallery Image 6" /></div>
          <div className="box11 g"><img src={img7} alt="Gallery Image 7" /></div>
          <div className="box11 h"><img src={img8} alt="Gallery Image 8" /></div>
          <div className="box11 j"><img src={img9} alt="Gallery Image 9" /></div>
          <div className="box11 i"><img src={img10} alt="Gallery Image 10" /></div>
        </div>
      </section>
  )
}

export default Gallary
