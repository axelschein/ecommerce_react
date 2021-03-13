import React, { Component } from "react";

export class Greetings extends Component {
  render() {
    return <h1>Welcome {this.props.nombre}!</h1>;
  }
}

export default Greetings;
