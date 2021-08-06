/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 1,
      next: 0,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const calculation = calculate(this.state, buttonName);
    this.setState(calculation);
  }

  render() {
    return (
      <>
        <Display prop={this.state.total.toString()} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default AppComponent;
