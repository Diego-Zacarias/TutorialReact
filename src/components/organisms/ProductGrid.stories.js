import React from "react";

import ProductGrid from "./ProductGrid";
import { buildProductList } from "models/builders/products";

export default {
  title: "Components/Organisms/ProductGid",
  component: ProductGrid,
};

const products = buildProductList(8);

export const usage = () => <ProductGrid products={products} />;
