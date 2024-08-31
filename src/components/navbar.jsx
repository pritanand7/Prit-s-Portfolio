import React from 'react'
import '../App.css'
function Navbar() {
  return (
    <nav className="navbar">
    <ul className="navbar-list">
      <li className="navbar-item">
        <button className="navbar-link  active" >
          <a href='/'>About</a>
        </button>
      </li>
      <li className="navbar-item">
        <button className="navbar-link" data-nav-link="">
         <a href='./resume'>Resume</a>
        </button>
      </li>
      <li className="navbar-item">
        <button className="navbar-link" data-nav-link="">
         <a href='./portfolio'>Highlights</a>
        </button>
      </li>
      {/* <li className="navbar-item">
        <button className="navbar-link" data-nav-link="">
         <a href='./slideshow'>Slideshow</a>
        </button>
      </li> */}
      <li className="navbar-item">
        <button className="navbar-link" data-nav-link="">
          <a href='https://forms.visme.co/formsPlayer/rx7kemrn-prit-039-s-portfolio-contact-form'>Contact</a>
        </button>
      </li>
    </ul>
    </nav>
  )
}

export default Navbar
