import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import EducationCard from "../features/EducationCard";
import photo from "../shared/static/atlantacropped.jpg";
import logo from "../shared/static/logo.png";
import "../shared/styles/styles.scss";
import {
  tagline1,
  tagline2,
  aboutMe
} from '../shared/utils/strings'

class Home extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={logo} className="header-logo" alt="The Kate Perry logo" />
          <div className="tagline">
            <Typography variant="h5" color="primary">
              {tagline1}
            </Typography>
            <div className="space--l" />
            <Typography variant="h6">{tagline2}</Typography>
          </div>
          <div className="space--l" />
          <img
            src={photo}
            className="photo"
            alt="Kate Perry in front of Atlanta skyline"
          />
          <div className="space--xl" />
          <div className="body-background">
            <Typography color="textPrimary">
              {aboutMe}
            </Typography>
            <div className="space--l" />
            <Button variant="contained" color="primary">Find out more!</Button>
          </div>
          <div className="space--l" />
          <Divider style={{color:"#000000"}} variant="middle" />
          <div className="space--l" />
          <EducationCard />
        </header>
      </div>
    );
  }
}

export default Home;
