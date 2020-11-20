import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import logo from "../shared/static/logo.png";
import "../shared/styles/styles.scss";

class Portfolio extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={logo} className="header-logo" alt="The Kate Perry logo" />
          <div className="space--m" />
          <div className="title">
            <Typography variant="h5">
              Portfolio
            </Typography>
          </div>
          <div className="body-background">
            <Typography variant="h6" color="textPrimary">
                Coming Soon!
            </Typography>
            <div className="space--xl" />
            <div className="space--xl" />
          </div>
        </header>
      </div>
    );
  }
}

export default Portfolio;