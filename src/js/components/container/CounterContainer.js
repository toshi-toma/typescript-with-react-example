import React, { Component } from "react";
import Button from "../presentational/Button";

class CounterContainer extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    this.countUp = this.countUp.bind(this)
  }
  countUp() {
    this.setState({count: this.state.count + 1})
  }
  render() {
    return (
      <div>
        <div>count:{this.state.count}</div>
        <Button label="count up!" onClick={this.countUp}/>
      </div>
    )
  }
}
export default CounterContainer;
