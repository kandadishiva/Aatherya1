import React, { useState, useEffect } from 'react';
import Slide1 from '../../Static/Images/hero-slider-1.jpg';
import Slide2 from '../../Static/Images/hero-slider-2.jpg';
import Slide3 from '../../Static/Images/hero-slider-3.jpg';
import icon from '../../Static/Images/hero-icon.png';
import './Slider.css';

const Slider = () => {
  const slides = [Slide1, Slide2, Slide3];
  const [currentSlidePos, setCurrentSlidePos] = useState(0);

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setCurrentSlidePos((prevPos) => (prevPos === slides.length - 1 ? 0 : prevPos + 1));
    }, 7000);

    return () => clearInterval(autoSlideInterval);
  }, []);

  const slideNext = () => {
    setCurrentSlidePos((prevPos) => (prevPos === slides.length - 1 ? 0 : prevPos + 1));
  };

  const slidePrev = () => {
    setCurrentSlidePos((prevPos) => (prevPos === 0 ? slides.length - 1 : prevPos - 1));
  };

  return (
    <section className="hero" aria-label="home" id="home">
      <ul className="hero-slider">
        {slides.map((slide, index) => (
          <li key={index} className={`slider-item ${index === currentSlidePos ? 'active' : ''}`}>
            <div className="slider-bg">
              <img src={slide} width="100%" height="950" alt="" className="img-cover" />
            </div>

            <p className="hero__p  slider-reveal">
              Welcome to Aatherya Educational Trust
            </p>

            <h1 className="hero__h1 display-1 hero-title slider-reveal">
              {/*gives finial support to the poor students for their education*/}
            </h1>

            <p className="body-2 hero-text slider-reveal">
              {/* Your text content */}
            </p>

            {/*<a href="#" className="btn btn-primary slider-reveal">
              <span className="text text-1">View Our Menu</span>
              <span className="text text-2" aria-hidden="true">
                View Our Menu
              </span>
            </a>*/}
          </li>
        ))}
      </ul>
      
    </section>
  );
};

export default Slider;
