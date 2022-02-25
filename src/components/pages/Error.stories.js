import React from "react";
import Error from "./Error";

import ErroSvg from "draws/Error";

export default {
  title: "Components/Pages/Error",
  component: Error,
};

const props = {
  image: <ErroSvg />,
  title: "Erro",
  description: "descricao do erro",
};

export const usage = () => <Error {...props} />;
