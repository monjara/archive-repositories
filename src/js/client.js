import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <h1>It's works!</h1>
      </div>
    );
  }
}

const app = document.getElementById("app");
ReactDOM.render(<Layout />, app);
