

import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }
  
  increment = () => {
    // implement our state change to increment the count;
    this.setState({
      count: this.state.count +1
    });
  }

  decrement = () => {
    // implement our state change to decrement the count;
    this.setState({
      count: this.state.count -1
    });
  }

  reset = () => {
    // implement our state change to reset the count;
    this.setState({
      count: this.state.count =0
    });
  }


  render() {
    console.log("This line represents state", this.state.counter);
    return (
      <div className="container">
        <div className="navbar">Counter (A JavaScript React App)</div>
        <div className="counter">
          <h1> {this.state.count} </h1>
          <button type="button" onClick={this.increment}>Increment</button>
          <button type="button"onClick={this.decrement}>Decrement</button>
          <button type="button"onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}


export default Counter;
