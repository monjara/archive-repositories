import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  render() {
    let name = "test_name";
    return (
      <div>
        <h1>Hello! {name}!</h1>
      </div>
    );
  }
}

const app = document.getElementById("app");
ReactDOM.render(<Layout />, app);
