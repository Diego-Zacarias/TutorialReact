import React from "react";
import Error from "components/pages/Error";

import ErroSvg from "draws/Error";

const props = {
  image: <ErroSvg />,
  title: "Página não encontrada!",
  description: "A página buscada não foi encontrada ou não existe.",
};

const error404 = () => {
  return <Error {...props} />;
};

export default error404;
