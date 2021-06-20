class App extends React.Component {
  render() {
    if (this.LoggedIn) {
      return <LoggedIn />;
    } else {
      return <Home />;
    }
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
