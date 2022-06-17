import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function NavBar() {
  return (
    <div className="navbar">
      <div>
        <h1>Math Magiciants</h1>
      </div>
      <nav className="navlinks">
        <Link to="/">Home</Link>
        <Link to="/calculate">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </nav>
    </div>
  );
}
