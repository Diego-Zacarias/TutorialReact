import image from "assets/img_2.jpg";
import products from "models/builders/fixtures/generated_products.json";

export const buildProductList = (size) => {
  const result = [];

  for (let i = 0; i < size; i++) {
    result.push({
      ...products[i],
      image: image,
    });
  }
  return result;
};

export const buildProduct = buildProductList(1)[0];
