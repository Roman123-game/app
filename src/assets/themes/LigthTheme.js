import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const primaryLight = "#46c6f4";
const primaryMain = "#048abf";
const primaryDark = "#0477bf";

const secondaryLight = "#FFC279";
const secondaryMain = "#f2a03d";
const secondaryDark = "#d97c2b";

const contrastTextDark = "#494949";

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      light: primaryDark,
      main: primaryMain,
      dark: primaryLight,
      contrastText: contrastTextDark
    },
    secondary: {
      light: secondaryLight,
      main: secondaryMain,
      dark: secondaryDark
    },
    type: "light",
    // background: {
    //   paper: '#E4E4E4'
    // },
    overrides: {
      MuiCardHeader: {
        action: {
          marginTop: "auto",
          marginBottom: "auto"
        }
      }
    }
  }
});

export default lightTheme;