import React from "react";
import { render, screen } from "test-utils";

import ProductDetailRoute from "routes/services/index";
import { useProduct } from "hooks/products";
import { buildProductList } from "models/builders/products";

jest.mock("hooks/products");

const product = buildProductList(1);

test("should render with a product", () => {
  useProduct.mockReturnValue(product[0]);
  render(<ProductDetailRoute />);
  const linkElement = screen.getByText("Delectus minima consequuntur", {
    selector: "h1",
  });
  expect(linkElement).toBeInTheDocument();
});

test("should render error page", () => {
  useProduct.mockReturnValue(null);
  render(<ProductDetailRoute />);
  const linkElement = screen.getByText("Produto não encontrado!", {
    selector: "h1",
  });
  expect(linkElement).toBeInTheDocument();
});
