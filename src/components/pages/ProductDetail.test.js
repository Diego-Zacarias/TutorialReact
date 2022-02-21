import React from "react";
import { render, screen } from "test-utils";
import ProductDetail from "./ProductDetail";

test('should render with ""', () => {
  render(<ProductDetail />);
  const linkElement = screen.getByText("Nome do Servicos");
  expect(linkElement).toBeInTheDocument();
});
