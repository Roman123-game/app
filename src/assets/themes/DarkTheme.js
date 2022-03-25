import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const primaryLight = "#46c6f4";
const primaryMain = "#048abf";
const primaryDark = "#0477bf";

const secondaryMain = "#f2a03d";
const secondaryDark = "#d97c2b";

const contrastTextLight = "#ffffff";

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      light: primaryLight,
      main: primaryMain,
      dark: primaryDark,
      contrastText: contrastTextLight
    },
    secondary: {
      main: secondaryMain,
      dark: secondaryDark
    },
    type: "dark"
  },
  overrides: {
    MuiCardHeader: {
      action: {
        marginTop: "auto",
        marginBottom: "auto"
      }
    }
  }
});

export default darkTheme;