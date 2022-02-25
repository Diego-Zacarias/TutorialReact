import React from "react";
import { render } from "test-utils";
import About from "routes/about";
import { useScrollToTop } from "hooks/scroll";

jest.mock("hooks/scroll");

test("should scroll to top", () => {
  render(<About />);
  expect(useScrollToTop).toBeCalledTimes(2);
});
