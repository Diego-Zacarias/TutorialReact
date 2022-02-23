import React from "react";

import ProductDetail from "./ProductDetail";
import { buildProduct } from "models/builders/products";

export default {
  title: "Components/Pages/ProductDetail",
  component: ProductDetail,
};

const product = buildProduct();

export const usage = () => (
  <>
    <ProductDetail product={product} />
  </>
);
