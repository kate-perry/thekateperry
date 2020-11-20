import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import App from "./pages/App";
import MuiTheme from './shared/styles/MuiTheme';
import "./shared/styles/styles.scss";
import * as serviceWorker from "./shared/utils/serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={MuiTheme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
