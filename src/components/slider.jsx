import React from 'react';
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
import './Slider.scss';

const Slider = () => {
  return (
    <div className="container">
      <div className="slider">
        <input className="slider-target" type="radio" id="slide-0" name="slider" />
        <input className="slider-target" type="radio" id="slide-1" name="slider" />
        <input className="slider-target" type="radio" id="slide-2" name="slider" />
        <input className="slider-target" type="radio" id="slide-3" name="slider" defaultChecked />
        <input className="slider-target" type="radio" id="slide-4" name="slider" />
        <input className="slider-target" type="radio" id="slide-5" name="slider" />
        <input className="slider-target" type="radio" id="slide-6" name="slider" />
        <input className="slider-target" type="radio" id="slide-7" name="slider" />
        <input className="slider-target" type="radio" id="slide-8" name="slider" />
        <input className="slider-target" type="radio" id="slide-9" name="slider" />

        <div className="slider__viewport">
          <div className="slider__viewbox">
            <div className="slider__container">
              {sliderItems.map((item, index) => (
                <div className="slider-item" key={index}>
                  <label className="slider-item__arrow-previous" htmlFor={`slide-${index === 0 ? sliderItems.length - 1 : index - 1}`}></label>
                  <label className="slider-item__arrow-next" htmlFor={`slide-${(index + 1) % sliderItems.length}`}></label>
                  <div className="slider-item__inner">
                    <label className="slider-item__trigger" htmlFor={`slide-${index}`} title={`Show product ${index}`}></label>
                    <a className="card"  target="_blank" style={{ '--card-image': `url('${item.image}')` }}>
                      <div className="card__container">
                        <div className="card__image"></div>
                        <div className="card__content">
                          <p className="card-meta"><span className="card-meta-item">{item.year}</span><span className="card-meta-item">{item.duration}</span></p>
                          <p className="card-description">{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const sliderItems = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  },
  {
    image: img5,
  },
  {
    image: img6,
  },
  {
    image: img7,
  },
  {
    image: img8,
  },
  {
    image: img9,
  },
  {
    image: img10,
  },
];

export default Slider;
