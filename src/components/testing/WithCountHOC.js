import React, { Component } from "react";
const WithCountHOC = (Orignalomponent) => {
  return class CompHOC extends Component {
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
        <Orignalomponent
          count={this.state.count}
          handleCount={this.handleCount}
        />
      );
    }
  }
};
export default WithCountHOC;
