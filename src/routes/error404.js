import React from "react";
import Error from "components/pages/Error";

import ErroSvg from "draws/Error";

const props = {
  image: <ErroSvg />,
  title: "Erro",
  description: "descricao do erro",
};

const error404 = () => {
  return <Error {...props} />;
};

export default error404;
