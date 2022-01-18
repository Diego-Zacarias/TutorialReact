import React from "react";
import { render, screen, fireEvent } from "test-utils";

import AccordionGroup from "./AccordionGroup";
import Accordion from "./Accordion";

const title = "My title";

const renderGroup = (n) => {
  const accordions = [];

  for (let i = 0; i < n; i++) {
    accordions.push(
      <Accordion key={i} title={`Title ${i}`}>
        Child {i}
      </Accordion>
    );
  }

  return render(<AccordionGroup>{accordions}</AccordionGroup>);
};

test("should renders with children", () => {
  render(
    <AccordionGroup>
      <Accordion title={title} />
    </AccordionGroup>
  );

  expect(screen.getByText(title)).toBeInTheDocument();
});

test("should renders with 3 children", () => {
  render(
    <AccordionGroup>
      <Accordion title={title} />
      <Accordion title={title} />
      <Accordion title={title} />
    </AccordionGroup>
  );

  expect(screen.getAllByText(title)).toHaveLength(3);
});

test("should reders with all accordions closed", () => {
  renderGroup(3);

  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();
});

test("should open accordions with click", async () => {
  renderGroup(3);

  await fireEvent.click(screen.getByText("Title 1"));

  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();
});

test("should close accordions with click", async () => {
  renderGroup(3);

  await fireEvent.click(screen.getByText("Title 1"));

  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();

  await fireEvent.click(screen.getByText("Title 1"));

  expect(screen.queryByText("Child 0")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument();
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument();
});
