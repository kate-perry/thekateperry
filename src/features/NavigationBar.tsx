import React, { Component } from "react";
import "../shared/styles/styles.scss";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button"
import history from "../shared/utils/history";

class NavigationBar extends Component {
  render() {
    return (
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} className="header--bar">
          <Grid
            container
            direction="row"
            spacing={5}
            alignItems="center"
            justify="center"
          >
            <Button onClick={() => history.push("/")}>Home</Button>
            <Button onClick={() => history.push("/experience")}>Experience</Button>
            <Button onClick={() => history.push("/portfolio")}>Portfolio</Button>
          </Grid>
        </Grid>
        <Grid item xs={12} />
      </Grid>
    );
  }
}

export default NavigationBar;
