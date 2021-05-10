import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = { title: "Welcome!" };
  }
  render() {
    setTimeout(() => {
      this.setState({ title: "Here!" });
    }, 2000);
    return (
      <div>
        <Header title={this.state.title} />
        <Header title={"test2"} />
        <Footer />
      </div>
    );
  }
}
