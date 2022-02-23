const casual = require("casual");

const buildProductList = (size) => {
  const result = [];

  for (let i = 0; i < size; i++) {
    result.push({
      id: i + 1,
      image: "",
      title: casual.title,
      summary: casual.description,
      slang: casual.word,
    });
  }
  return result;
};

console.log(JSON.stringify(buildProductList(100), null, "  "));
