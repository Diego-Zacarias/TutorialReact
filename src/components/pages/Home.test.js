import React from "react";
import { render, screen } from "@testing-library/react";
import App from "App";

test("should renders call to action", () => {
  render(<App />);
  const linkElement = screen.getByText(/Start now/i);
  expect(linkElement).toBeInTheDocument();
});
