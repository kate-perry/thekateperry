import React, { Component } from "react";
import "../shared/styles/styles.scss";
import Typography from "@material-ui/core/Typography";
import {
  education
} from '../shared/utils/strings'

class ExperienceCard extends Component {
  render() {
    return (
      <div className="body">
        <Typography variant="h5" color="primary">Education</Typography>
        <div className="space--m" />
        <Typography variant="body1" color="textPrimary"><strong>{education.institutionName}</strong></Typography>
        <Typography variant="body1" color="textPrimary">{education.degree}</Typography>
        <Typography variant="body2" color="textPrimary">{education.dateSpan[0]} - {education.dateSpan[1]}</Typography>
        <div className="space--l" />
        <Typography variant="body2" color="textPrimary"><em>Major - </em><strong>{education.major}</strong></Typography>
        <Typography variant="body2" color="textPrimary"><em>Specializations - </em>{education.specializations}</Typography>
        <Typography variant="body2" color="textPrimary"><em>Minor - </em>{education.minor}</Typography>
      </div>
    );
  }
}

export default ExperienceCard;
