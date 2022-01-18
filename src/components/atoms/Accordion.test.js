import React from "react";
import { render, screen, fireEvent } from "test-utils";

import Accordion from "./Accordion";

const title = "My title";
const text = "My text";

test("should render the title", () => {
  render(<Accordion title={title}></Accordion>);

  expect(screen.getByText(title)).toBeInTheDocument();
});

test("should render without children", () => {
  render(<Accordion>{text}</Accordion>);

  expect(screen.queryByText(text)).not.toBeInTheDocument();
});

test("should triggers onChange when it is clicked", async () => {
  const handleChange = jest.fn();
  render(<Accordion title={title} onChange={handleChange}></Accordion>);

  await fireEvent.click(screen.getByText(title));

  expect(handleChange).toBeCalled();
});

describe("When is controlled", () => {
  describe("When starts opened", () => {
    test("should render with children", () => {
      render(<Accordion open>{text}</Accordion>);

      expect(screen.queryByText(text)).toBeInTheDocument();
    });

    test("shoul triggers onChange on click", async () => {
      const handleChange = jest.fn();

      render(<Accordion title={title} onChange={handleChange} open />);

      await fireEvent.click(screen.getByText(title));

      expect(handleChange).toBeCalled();
    });

    test("shoul call default function on click", async () => {
      const handleChange = jest.fn();
      render(<Accordion title={title} open onChange={handleChange} />);

      await fireEvent.click(screen.getByText(title));
    });

    test("should hide children when open change to false", () => {
      const { rerender } = render(
        <Accordion title={title} open>
          {text}
        </Accordion>
      );

      rerender(
        <Accordion title={title} open={false}>
          {text}
        </Accordion>
      );

      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
  });

  describe("When starts closed", () => {
    test("should render with children", () => {
      render(<Accordion open={false}>{text}</Accordion>);

      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
  });
});
