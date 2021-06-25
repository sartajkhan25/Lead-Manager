import React, { Component } from "react";
import WithCountHOC from "./WithCountHOC";

class CompAUsingHOC extends Component {
  render() {
    return (
      <div  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.handleCount}>Click Count + 1</button>
      </div>
    );
  }
}

export default WithCountHOC(CompAUsingHOC)