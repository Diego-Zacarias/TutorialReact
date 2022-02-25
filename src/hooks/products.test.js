import { useProducts, useProduct } from "hooks/products";

test("should return a product", () => {
  const slang = "servico-1";
  const product = useProduct({ slang });
  expect(product.title).toEqual("Title 1");
});

test("should return undefined", () => {
  const slang = "###";
  const product = useProduct({ slang });
  expect(product).toBeUndefined();
});

test("should return a product list", () => {
  const products = useProducts();
  expect(products.length).toBeGreaterThan(1);
});
