import React, { Component } from "react";

export default class CompB extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleCount = this.handleCount.bind();
  }
  handleCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}>
        <h1>{this.state.count}</h1>
        <button onMouseOver={this.handleCount}>Hover Count + 1</button>
      </div>
    );
  }
}
