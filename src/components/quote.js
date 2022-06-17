import React from 'react';
import NavBar from './navbar';
import './quote.css';

export default function Quote() {
  return (
    <div>
      <div className="nav">
        <NavBar />
      </div>
      <div className="quote-content">
        <p>
          Mathematics is not about numbers, equations, computations, or algorithms: it is about
          understanding.
          <strong>-William Paul Thurston</strong>
        </p>
      </div>
    </div>
  );
}
