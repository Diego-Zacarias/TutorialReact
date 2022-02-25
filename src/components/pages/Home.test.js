import React from "react";
import { render, screen } from "test-utils";
import Home from "components/pages/Home";

test("should renders call to action", () => {
  render(<Home />);
  const linkElement = screen.getByText(/App/i, { selector: "strong" });
  expect(linkElement).toBeInTheDocument();
});
