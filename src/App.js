import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ThemeProvider from "./styles/ThemeProvider";
import GlobalStyle from "./styles/GlobalStyle";
import AppRoutes from "routes";

const App = () => {
  return (
    <ThemeProvider theme="ocean">
      <GlobalStyle />
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
