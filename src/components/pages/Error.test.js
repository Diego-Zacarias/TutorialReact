import React from "react";
import { render, screen } from "test-utils";

import Error from "components/pages/Error";
import ErroSvg from "draws/Error";

const props = {
  image: <ErroSvg />,
  title: "Erro",
  description: "descricao do erro",
};

test('should render with "Erro"', () => {
  render(<Error {...props} />);
  const linkElement = screen.getByText(props.title);
  expect(linkElement).toBeInTheDocument();
});
