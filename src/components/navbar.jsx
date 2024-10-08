import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button className="navbar-link active">
            <Link to="/">About</Link>
          </button>
        </li>
        <li className="navbar-item">
          <button className="navbar-link" data-nav-link="">
            <Link to="/resume">Resume</Link>
          </button>
        </li>
        <li className="navbar-item">
          <button className="navbar-link" data-nav-link="">
            <Link to="/highlights">Highlights</Link>
          </button>
        </li>
        <li className="navbar-item">
          <button className="navbar-link" data-nav-link="">
            <Link to="/contact">Contact</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
