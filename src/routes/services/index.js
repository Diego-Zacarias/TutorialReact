import React from "react";
import { useParams } from "react-router-dom";

import ProductDetailPage from "components/pages/ProductDetail";

import { useScrollToTop } from "hooks/scroll";
import { useProduct } from "hooks/products";

const ProductDetail = () => {
  useScrollToTop();
  const { slang } = useParams();
  const product = useProduct({ slang });

  return <ProductDetailPage product={product} />;
};

export default ProductDetail;
