import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

export default class MyCalculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      initialCal: 0,
    };
    this.calc = this.calc.bind(this);
  }

  calc(e) {
    const valor = e.target.innerText;
    const { initialCal } = this.state;
    const result = calculate(initialCal, valor);
    this.setState({ initialCal: result });
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
  render() {
    return (
      <div className="calculatorContainer">
        <div className="result">
          <p>0</p>
        </div>
        <button type="button" className="clearCal" onClick={this.calc}>{`AC`}</button>
        <button type="button" className="masMenos" onClick={this.calc}>+/-</button>
        <button type="button" className="porcentaje" onClick={this.calc}>%</button>
        <button type="button" className="division" onClick={this.calc}>÷</button>
        <button type="button" className="siete" onClick={this.calc}>7</button>
        <button type="button" className="ocho" onClick={this.calc}>8</button>
        <button type="button" className="nueve" onClick={this.calc}>9</button>
        <button type="button" className="multiplicacion" onClick={this.calc}>x</button>
        <button type="button" className="cuatro" onClick={this.calc}>4</button>
        <button type="button" className="cinco" onClick={this.calc}>5</button>
        <button type="button" className="seis" onClick={this.calc}>6</button>
        <button type="button" className="resta" onClick={this.calc}>-</button>
        <button type="button" className="uno" onClick={this.calc}>1</button>
        <button type="button" className="dos" onClick={this.calc}>2</button>
        <button type="button" className="tres" onClick={this.calc}>3</button>
        <button type="button" className="suma" onClick={this.calc}>+</button>
        <button type="button" className="cero" onClick={this.calc}>0</button>
        <button type="button" className="punto" onClick={this.calc}>.</button>
        <button type="button" className="igual" onClick={this.calc}>=</button>
      </div>
    );
  }
}
