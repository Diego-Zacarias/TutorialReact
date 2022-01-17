import React from "react";

import ProductGrid from "./ProductGrid";
import image from "assets/bg_time.jpg";

export default {
  title: "Components/Organisms/ProductGid",
  component: ProductGrid,
};

export const usage = () => (
  <ProductGrid
    products={[
      { id: 1, title: "Title 1", summary: "asdfasdfsafd", image: image },
      { id: 2, title: "Title 2", summary: "asdfasdfsafd", image: image },
      { id: 3, title: "Title 3", summary: "asdfasdfsafd", image: image },
      { id: 4, title: "Title 4", summary: "asdfasdfsafd", image: image },
      { id: 5, title: "Title 5", summary: "asdfasdfsafd", image: image },
      { id: 6, title: "Title 6", summary: "asdfasdfsafd", image: image },
    ]}
  />
);
