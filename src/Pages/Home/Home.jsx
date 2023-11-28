import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Slider from '../../Components/Slider/Slider'
import About from '../../Components/About/About'
import Gallery from '../../Components/Gallery/Gallery'
import Testimonial from '../../Components/Testimonials/Testimonial'
import Count from '../../Components/Count/Count'
import Programs from '../../Components/Programs/Programs'
import Footer from '../../Components/contact/ContactUs'
import './Home.css'

const Home = () => {
  return (
    <div className="Home">
      <Navbar/>
      <Slider/>
      <About/>
      <Testimonial/>
      <Count/>
      <Gallery/>
      <Programs/>
    </div>
  )
}

export default Home;