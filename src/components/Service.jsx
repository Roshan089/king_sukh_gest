import React from 'react'

const Service = () => {
  return (
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
  )
}

export default Service
