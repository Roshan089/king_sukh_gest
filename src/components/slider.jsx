import React from 'react';
import img1 from '../assets/ayodhya.webp'
import './Slider.scss'; // Make sure to create and import your CSS file

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
                          <h2 className="card-title">{item.title}</h2>
                          <ul className="card-tag-list">
                            {item.tags.map((tag, i) => (
                              <li className="card-tag-list-item" key={i}>{tag}</li>
                            ))}
                          </ul>
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
    link: 'https://www.imdb.com/title/tt7286456',
    image: img1,
    year: '2019',
    duration: '2h 2m',
    title: 'Joker',
    tags: ['Crime', 'Drama', 'Thriller'],
    description: 'A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.',
  },
  {
    link: 'https://www.imdb.com/title/tt14614892',
    image: 'https://m.media-amazon.com/images/M/MV5BYmQ1Y2Y4NmItY2E4Mi00ZmM2LWFiOTEtMGVmMDRhN2ZiODU0XkEyXkFqcGdeQXVyNTkxMzEwMzU@._V1_FMjpg_UY720_.jpg',
    year: '2022',
    duration: '1h 40m',
    title: 'Dragon Ball Super: Super Hero',
    tags: ['Animation', 'Action', 'Adventure'],
    description: "The Red Ribbon Army from Goku's past has returned with two new androids to challenge him and his friends.",
  },
  {
    link: 'https://www.imdb.com/title/tt0816692',
    image: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UY720_.jpg',
    year: '2014',
    duration: '2h 49m',
    title: 'Interstellar',
    tags: ['Action', 'Drama', 'Sci-Fi'],
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    link: 'https://www.imdb.com/title/tt10872600',
    image: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UY720_.jpg',
    year: '2021',
    duration: '2h 28m',
    title: 'Spider-Man: No Way Home',
    tags: ['Action', 'Adventure', 'Fantasy'],
    description: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
  },
  {
    link: 'https://www.imdb.com/title/tt1877830/',
    image: 'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UY720_.jpg',
    year: '2022',
    duration: '2h 56m',
    title: 'The Batman',
    tags: ['Action', 'Crime', 'Drama'],
    description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
  },
  {
    link: 'https://www.imdb.com/title/tt1745960/',
    image: 'https://m.media-amazon.com/images/M/MV5BOWQwOTA1ZDQtNzk3Yi00ZmVmLWFiZGYtNjdjNThiYjJhNzRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX988_.jpg',
    year: '2022',
    duration: '2h 10m',
    title: 'Top Gun: Maverick',
    tags: ['Action', 'Drama'],
    description: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
  },
  {
    link: 'https://www.imdb.com/title/tt0137523/',
    image: 'https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UY720_.jpg',
    year: '1999',
    duration: '2h 19m',
    title: 'Fight Club',
    tags: ['Drama'],
    description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
  },
];

export default Slider;
