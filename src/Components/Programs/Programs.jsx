import React from 'react'
import './Programs.css'
import image0 from '../../Static/Images/slide2.jpg'
import image1 from '../../Static/Images/slide3.jpg'
import image2 from '../../Static/Images/slide1.jpg'
import image3 from '../../Static/Images/Gallery3.jpg'
import image4 from '../../Static/Images/Gallery4.jpg'
import image5 from '../../Static/Images/Gallery3.jpg'
import image6 from '../../Static/Images/Gallery4.jpg'
import image7 from '../../Static/Images/Gallery3.jpg'
import image8 from '../../Static/Images/slide1.jpg'

export const Programs = () => {
  return (
    <section id="TopCoders" className="TopCoders">
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <h2 style={{ fontWeight: "bold" }}>Our Latest Events and Programs</h2>
          <div className="slideshow">
            <div className="content">
              <div className="slider-content">
                <figure className="shadow">
                  <img src={image0} alt="Image 1" />
                </figure>
                <figure className="shadow">
                  <img src={image1} alt="Image 2" />
                </figure>
                <figure className="shadow">
                  <img src={image2} alt="Image 3" />
                </figure>
                <figure className="shadow">
                  <img src={image3} alt="Image 4" />
                </figure>
                <figure className="shadow">
                  <img src={image4} alt="Image 5" />
                </figure>
                <figure className="shadow">
                  <img src={image5} alt="Image 6" />
                </figure>
                <figure className="shadow">
                  <img src={image6} alt="Image 7" />
                </figure>
                <figure className="shadow">
                  <img src={image7} alt="Image 8" />
                </figure>
                <figure className="shadow">
                  <img src={image8} alt="Image 9" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Programs;