import React, { Component } from "react";
import WithCountHOC from "./WithCountHOC";

class CompCUsingHOC extends Component {
  render() {
    return (
      <div  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}>
        <h1>{this.props.count}</h1>
        <button onMouseOut={this.props.handleCount}>Mouse out Count + 1</button>
      </div>
    );
  }
}

export default WithCountHOC(CompCUsingHOC)