import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#b39ddb",
      main: "#0071EB",
      dark: "#512da8",
      contrastText: "#fff",
    },
    secondary: {
      light: "#448aff",
      main: "#2979ff",
      dark: "#2962ff",
      contrastText: "#000",
    },
    other: {
      light: "#F0F7FF",
      main: "#FFF8EA",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Inter",
      fontSize: "14px",
      fontWeight: 400,
    },
    fontSize: 16,

    h3: {
      fontWeight: 700,
      fontSize: "2.2rem",
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.75rem",
      marginTop: "1rem",
      marginBottom: ".9rem",
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
});

const AppThemeProvider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
export default AppThemeProvider;
