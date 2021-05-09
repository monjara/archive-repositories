import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = { name: "test_name" };
  }
  render() {
    setTimeout(() => {
      this.setState({ name: "Hello" });
    }, 1000);

    return (
      <div>
        <Header />
        <div>{this.state.name}</div>
        <Footer />
      </div>
    );
  }
}
