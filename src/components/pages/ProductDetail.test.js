import React from "react";

import { render, screen } from "test-utils";
import ProductDetail from "./ProductDetail";
import { useProducts } from "hooks/products";

test(`should render`, () => {
  const products = useProducts();
  render(<ProductDetail product={products[0]} />);
  const linkElement = screen.getAllByText(products[0].title);
  expect(linkElement.length).toBeGreaterThan(0);
});
