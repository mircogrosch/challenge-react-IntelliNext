import { createTheme } from "@mui/material/styles";
import { deepPurple, grey } from "@mui/material/colors";

const themes = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#7e6dee",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: grey[600],
          fontSize: "1.2rem",
          fontWeight: "bold",
        },
        containedPrimary: {
          color: "white",
        },
      },
    },
  },
  typography: {
    allVariants: {
      fontFamily: `"Montserrat", sans-serif`,
      textTransform: "none",
    },
    h1: {
      fontWeight: "bold",
      fontSize: 18,
    },
    h6: {
      fontSize: 15,
    },
  },
  palette: {
    primary: {
      main: "#7e6dee",
      light: deepPurple[400],
      dark: deepPurple["A700"],
    },
    text: {
      primary: grey[600],
      secondary: grey[400],
      thirdy: "#FFFFFF",
    },
  },
});

export default themes;
