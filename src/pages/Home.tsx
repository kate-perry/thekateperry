import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import EducationCard from "../features/EducationCard";
import photo from "../shared/static/atlantacropped.jpg";
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
            <Typography variant="h5">
              Atlanta-based tech fanatic making leading-edge solutions reality.
            </Typography>
            <Typography variant="h5">It's nice to meet you!</Typography>
          </div>
          <div className="body-background">
            <Typography color="textPrimary">
              I am an IT professional with over 3 years of experience bringing
              solutions to reality. I’ve held a wide range of roles in a variety
              of industries, and with my diverse background in the development
              lifecycle, I bring an innovative perspective framed with technical
              possibility to business and product analysis.
            </Typography>
            <div className="space--xl" />
            <img
              src={photo}
              className="photo"
              alt="Kate Perry in front of Atlanta skyline"
            />
            <div className="space--xl" />
            <EducationCard />
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
