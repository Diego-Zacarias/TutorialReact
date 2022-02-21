import React from "react";
import { render, screen } from "test-utils";
import About from "components/pages/About";

beforeEach(() => {
  jest.resetAllMocks();
});

test("should renders call to action", () => {
  render(<About />);
  const textElement = screen.getByText("Conheca nosso Time");
  expect(textElement).toBeInTheDocument();
});
