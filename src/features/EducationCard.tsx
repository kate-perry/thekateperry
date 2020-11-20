import React, { Component } from "react";
import "../shared/styles/styles.scss";
import Typography from "@material-ui/core/Typography";

class ExperienceCard extends Component {
  render() {
    return (
      <>
        <Typography variant="h6" color="textPrimary">Education</Typography>
        <Typography color="textPrimary"><strong>The University of Alabama</strong></Typography>
        <Typography color="textPrimary">Bachelor of Science in Commerce and Business Administration</Typography>
        <Typography color="textPrimary">2013 - 2017</Typography>
        <div className="space--l" />
        <Typography color="textPrimary">Major: <strong>Management Information Systems</strong></Typography>
        <Typography color="textPrimary">Minor: <strong>French</strong></Typography>
        <Typography color="textPrimary">Specializations: <strong>Management Communications, Business Information Technology</strong></Typography>
      </>
    );
  }
}

export default ExperienceCard;
