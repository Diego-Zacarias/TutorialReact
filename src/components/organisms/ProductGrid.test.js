import React from "react";
import { render, screen, fireEvent } from "test-utils";
import { MemoryRouter } from "react-router-dom";

import ProductGrid from "./ProductGrid";

const buildProducts = (size) => {
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push({ id: i, title: `Title ${i}` });
  }

  return result;
};

describe.each([
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 3],
  [6, 3],
])("with %i products", (size, expected) => {
  test(`show only ${expected}`, () => {
    render(
      <MemoryRouter>
        <ProductGrid products={buildProducts(size)} />
      </MemoryRouter>
    );

    expect(screen.getAllByRole("heading").length).toBe(expected);
  });

  test("show all the products when button is clicked", async () => {
    render(
      <MemoryRouter>
        <ProductGrid products={buildProducts(size)} />
      </MemoryRouter>
    );

    await fireEvent.click(screen.getByText("Lista Completa"));

    expect(screen.getAllByRole("heading").length).toBe(size);
  });
});
