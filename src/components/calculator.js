import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';
import NavBar from './navbar';

export default function MyCalculator() {
  const [input, setValue] = useState(0);
  const calc = (e) => {
    const valor = e.target.innerText;
    const result = calculate(input, valor);
    setValue(result);
    const resultado = document.querySelector('.result');

    if (result.total === null && result.next !== null) {
      resultado.textContent = result.next;
    } else if (result.total !== null && result.next !== null) {
      resultado.textContent = result.next;
    } else if (result.total !== null && result.next == null) {
      resultado.textContent = result.total;
    } else {
      resultado.textContent = 0;
    }
  };

  return (
    <div>
      <div className='nav'>
        <NavBar />
      </div>
      <div className='calculator-title'>
        <h1>Let's do some Math!</h1>
      </div>
      <div className="calculatorContainer">
        <div className="result">
          <p>0</p>
        </div>
        <button type="button" className="clearCal" onClick={calc}>AC</button>
        <button type="button" className="masMenos" onClick={calc}>+/-</button>
        <button type="button" className="porcentaje" onClick={calc}>%</button>
        <button type="button" className="division" onClick={calc}>÷</button>
        <button type="button" className="siete" onClick={calc}>7</button>
        <button type="button" className="ocho" onClick={calc}>8</button>
        <button type="button" className="nueve" onClick={calc}>9</button>
        <button type="button" className="multiplicacion" onClick={calc}>x</button>
        <button type="button" className="cuatro" onClick={calc}>4</button>
        <button type="button" className="cinco" onClick={calc}>5</button>
        <button type="button" className="seis" onClick={calc}>6</button>
        <button type="button" className="resta" onClick={calc}>-</button>
        <button type="button" className="uno" onClick={calc}>1</button>
        <button type="button" className="dos" onClick={calc}>2</button>
        <button type="button" className="tres" onClick={calc}>3</button>
        <button type="button" className="suma" onClick={calc}>+</button>
        <button type="button" className="cero" onClick={calc}>0</button>
        <button type="button" className="punto" onClick={calc}>.</button>
        <button type="button" className="igual" onClick={calc}>=</button>
      </div>
    </div>
  );
}
