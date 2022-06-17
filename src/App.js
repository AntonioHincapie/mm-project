import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import MyCalculator from './components/calculator';
import Quote from './components/quote';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calculate' element={<MyCalculator />} />
        <Route path='/quote' element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
