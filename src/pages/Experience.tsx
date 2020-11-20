import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import ExperienceCard from "../features/ExperienceCard";
import logo from "../shared/static/logo.png";
import "../shared/styles/styles.scss";

class Home extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={logo} className="header-logo" alt="The Kate Perry logo" />
          <div className="space--m" />
          <div className="title">
            <Typography variant="h5">Experience</Typography>
          </div>
          <div className="body-background">
            <ExperienceCard />
            <div className="space--xl" />
            <div className="space--xl" />
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
