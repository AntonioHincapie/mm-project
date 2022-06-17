import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/calculate">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </nav>
    </div>
  );
}