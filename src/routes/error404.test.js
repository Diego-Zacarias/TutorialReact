import React from "react";
import { render, screen } from "test-utils";
import Error404 from "routes/error404";

test("should rende with 'Página não encontrada!'", () => {
  render(<Error404 />);
  const linkElement = screen.getByText("Página não encontrada!");
  expect(linkElement).toBeInTheDocument();
});
