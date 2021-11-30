import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

const theme = {
  colors: {
    primary: {
      main: "#12f3da",
      dark: "#01d1b5",
      light: "#11a2b8",
      text: "#212121",
    },
    danger: {
      main: "#ff3d00",
      dark: "#b22a00",
      text: "#212121",
    },
  },
};

const ThemeProvider = ({ children }) => (
  <StyledProvider theme={theme}>{children}</StyledProvider>
);

export default ThemeProvider;
