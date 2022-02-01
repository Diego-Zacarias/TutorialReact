import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

export const ThemeNames = {
  ocean: "ocean",
  yellow: "yellow",
};

const ocean = {
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
    border: "rgba(0, 0, 0, 0.125)",
  },
};

const allThemes = {
  ocean,
  yellow: {
    ...ocean,
    colors: {
      ...ocean.colors,
      primary: {
        main: "#ffc107",
        dark: "#c79100",
        light: "#fff350",
      },
    },
  },
};

const ThemeProvider = ({ theme, children }) => (
  <StyledProvider theme={allThemes[theme]}>{children}</StyledProvider>
);

ThemeProvider.defalultProps = {
  theme: ocean,
};

export default ThemeProvider;
