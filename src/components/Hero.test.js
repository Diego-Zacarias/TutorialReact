import React from "react";
import { render } from "@testing-library/react";

import Hero from "./Hero";

test("renders Hero with children", () => {
  const { getByText } = render(
    <Hero>
      <p>Diego Zacarias</p>
    </Hero>
  );

  expect(getByText("Diego Zacarias")).toBeInTheDocument();
});

test("renders image background", () => {
  const image = "http://test/image.jpg";
  const { getByTestId } = render(<Hero image={image} />);

  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image,
  });
});
