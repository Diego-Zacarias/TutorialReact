import React from "react";
import { render } from "@testing-library/react";
import ThemeProvider from "styles/ThemeProvider";
import { MemoryRouter } from "react-router-dom";

const TestProvider = ({ children }) => (
  <MemoryRouter>
    <ThemeProvider theme={"ocean"}>{children}</ThemeProvider>
  </MemoryRouter>
);

export * from "@testing-library/react";

const customRender = (ui, options) =>
  render(ui, { wrapper: TestProvider, ...options });

export { customRender as render };
