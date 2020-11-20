import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Experience from "../../pages/Experience";
import Portfolio from "../../pages/Portfolio";
import history from "./history";

interface IProps {}

interface IState {}

class Routes extends Component<IProps, IState> {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;