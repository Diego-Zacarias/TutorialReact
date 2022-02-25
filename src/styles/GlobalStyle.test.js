import React from "react";
import { render } from "test-utils";

import GlobalStyle from "./GlobalStyle";

test("match snapshot", () => {
  const { asFragment } = render(<GlobalStyle />);

  expect(asFragment()).toMatchSnapshot();
});
