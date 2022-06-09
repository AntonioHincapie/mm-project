import React from 'react';
import './calculator.css';

export default class MyCalculator extends React.PureComponent {
  render() {
    return (
      <div className="calculatorContainer">
        <div className="result">
          <p>0</p>
        </div>
        <button type="button" className="clearCal">AC</button>
        <button type="button" className="masMenos">+/-</button>
        <button type="button" className="porcentaje">%</button>
        <button type="button" className="division">÷</button>
        <button type="button" className="siete">7</button>
        <button type="button" className="ocho">8</button>
        <button type="button" className="nueve">9</button>
        <button type="button" className="multiplicacion">x</button>
        <button type="button" className="cuatro">4</button>
        <button button type="button" className="cinco">5</button>
        <button type="button" className="seis">6</button>
        <button type="button" className="resta">-</button>
        <button type="button" className="uno">1</button>
        <button type="button" className="dos">2</button>
        <button type="button" className="tres">3</button>
        <button type="button" className="suma">+</button>
        <button type="button" className="cero">0</button>
        <button type="button" className="punto">.</button>
        <button type="button" className="igual">=</button>
      </div>
    );
  }
}
