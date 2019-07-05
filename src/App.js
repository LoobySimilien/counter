

import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    }
  }

  increment = () => {
    // implement our state changeto increment the count;
    this.setState({
      counter: this.state.counter +1
    });
  }



  render() {
    console.log("This is line 13 representating state", this.state.counter);
    return (
      <div className="container">
        <div className="navbar">Counter.js</div>
        <div className="counter">
          <h1> {this.state.counter} </h1>
          <button type="button">Increment</button>
          <button type="button">Decrement</button>
        </div>
      </div>
    )
  }
}


export default Counter;
