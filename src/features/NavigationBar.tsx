import React, { Component } from "react";
import "../shared/styles/styles.scss";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import history from "../shared/utils/history";
import smallLogo from "../shared/static/small-logo.png";

class NavigationBar extends Component {
  render() {
    return (
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            alignItems="flex-start"
            justify="space-between"
            style={{ padding: '.75rem' }}
          >
            <Grid item>
              <img
                src={smallLogo}
                className="small-logo"
                alt="letter K with a pink background"
              />
            </Grid>
            <Grid item>
              <Button color="secondary" onClick={() => history.push("/")}>Home</Button>
              <Button color="secondary" onClick={() => history.push("/experience")}>
                Experience
            </Button>
              <Button color="secondary" onClick={() => history.push("/portfolio")}>
                Portfolio
            </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} />
      </Grid>
    );
  }
}

export default NavigationBar;
