import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  render() {
    const title = "Welcome!";
    return (
      <div>
        <Header title={title} />
        <Header title={"test2"} />
        <Footer />
      </div>
    );
  }
}
