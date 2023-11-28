import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <header className="Navbar">
      <a href="#" className="Navbar__Logo">Aatherya</a>

      <input type="checkbox" id="check" />
      <label htmlFor="check" className='Navbar__icons'>
        <i className='bx bx-menu' id="menu-icon"></i>
        <i className='bx bx-x' id="close-icon"></i>
      </label>
      <nav className='Navbar__Nav'>
        <a href="#" className='Navbar__a' >Home</a>
        <a href="#" className='Navbar__a' >About</a>
        <a href="#" className='Navbar__a' >Contact</a>
        <a href="#" className='Navbar__a' >Projects</a>

      </nav>
    </header>
  )
}

export default Navbar;