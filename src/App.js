import React from "react";

import ThemeProvider from "./styles/ThemeProvider";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <ThemeProvider theme="ocean">
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

export default App;
