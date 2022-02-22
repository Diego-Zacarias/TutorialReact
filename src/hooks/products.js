import bg_image from "assets/bg_time.jpg";

const products = [
  {
    id: 1,
    slang: "servico-1",
    title: "Title 1",
    summary: "asdfasdfsafd",
    image: bg_image,
  },
  {
    id: 2,
    slang: "servico-2",
    title: "Title 2",
    summary: "asdfasdfsafd",
    image: bg_image,
  },
  {
    id: 3,
    slang: "servico-3",
    title: "Title 3",
    summary: "asdfasdfsafd",
    image: bg_image,
  },
  {
    id: 4,
    slang: "servico-4",
    title: "Title 4",
    summary: "asdfasdfsafd",
    image: bg_image,
  },
  {
    id: 5,
    slang: "servico-5",
    title: "Title 5",
    summary: "asdfasdfsafd",
    image: bg_image,
  },
  {
    id: 6,
    slang: "servico-6",
    title: "Title 6",
    summary: "asdfasdfsafd",
    image: bg_image,
  },
];

export const useProducts = () => {
  return products;
};

export const useProduct = ({ slang }) => {
  return products.find((p) => p.slang === slang);
};
