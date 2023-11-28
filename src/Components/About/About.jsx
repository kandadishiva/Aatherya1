import React from 'react'
import Founder1 from '../../Static/Images/profile1.jpg'
import Founder2 from '../../Static/Images/profile2.jpg'
import Founder3 from '../../Static/Images/profile3.jpg'
import './About.css'

const About = () => {
  return (
    <section className="section service bg-black-10 text-center" aria-label="service">
        <div className="container">

          <div className='centered-content'>
            <h1 className='About__h1'>Trust Founders</h1>

            <p className="section-text">
              Aatherya Educational Trust was founded by this group of people.
            </p>
          </div>

          <ul className="grid-list">

            <li>
              <div className="service-card">

                <a href="#" className="has-before hover:shine">
                  <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
                    <img src={Founder1} width="285" height="336" loading="lazy" alt="Breakfast"
                      className="img-cover"/>
                  </figure>
                </a>

                <div className="card-content">

                  <h2 className="card-title">
                    Bhaskar
                  </h2>

                  <a href="#" className='About__a'>Know More</a>

                </div>

              </div>
            </li>

            <li>
              <div className="service-card">

                <a href="#" className="has-before hover:shine">
                  <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
                    <img src={Founder2} width="285" height="336" loading="lazy" alt="Appetizers"
                      className="img-cover"/>
                  </figure>
                </a>

                <div className="card-content">

                  <h2 className="card-title">
                    Ramu
                  </h2>

                  <a href="#" className='About__a'>Know More</a>

                </div>

              </div>
            </li>

            <li>
              <div className="service-card">

                <a href="#" className="has-before hover:shine">
                  <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
                    <img src={Founder3} width="285" height="336" loading="lazy" alt="Drinks"
                      className="img-cover"/>
                  </figure>
                </a>

                <div className="card-content">

                  <h2 className="card-title">
                    Ramya
                  </h2>

                  <a href="#" className='About__a'>Know More</a>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
  )
}

export default About