import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: { main: "#FE654F" }, //clay
    secondary: { main: "#7A9A68" }, //green
    contrastThreshold: 3,
    tonalOffset: 0.2,
    background: {
      default: "rgb(108, 100, 132)",
    },
  },
  typography: {
    fontFamily: ["Lato"].join(","),
    h5: {
      fontFamily: ["Yeseva One"].join(","),
    },
    h6: {
      fontFamily: ["Yeseva One"].join(","),
    },
    button: {
      textTransform: "none",
    },
  },
});
