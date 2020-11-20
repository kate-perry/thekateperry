import React, { Component } from "react";
import NavigationBar from "../features/NavigationBar";
import Routes from "../shared/utils/Routes";
import "../shared/styles/styles.scss";

class App extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Routes />
      </>
    );
  }
}

export default App;
