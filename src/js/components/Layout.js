import React from "react";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.name = "test_name";
  }
  render() {
    return <h1>Hello! {this.name}!</h1>;
  }
}
