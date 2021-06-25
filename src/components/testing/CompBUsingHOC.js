import React, { Component } from "react";
import WithCountHOC from "./WithCountHOC";

class CompBUsingHOC extends Component {
  render() {
    return (
      <div  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}>
        <h1>{this.props.count}</h1>
        <button onMouseOver={this.props.handleCount}>Hover Count + 1</button>
      </div>
    );
  }
}

export default WithCountHOC(CompBUsingHOC)