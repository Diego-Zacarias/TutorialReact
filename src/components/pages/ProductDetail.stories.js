import React from "react";

import ProductDetail from "./ProductDetail";
import { buildProductList } from "models/builders/products";

export default {
  title: "Components/Pages/ProductDetail",
  component: ProductDetail,
};

const product = buildProductList(1);

export const usage = () => (
  <>
    <ProductDetail product={product[0]} />
  </>
);
