import React from "react";
import { text } from "@storybook/addon-knobs";

import Heading from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
};

export const usage = () => (
  <div>
    <Heading>
      <h1>{text("Title 1", "Titulo 1")}</h1>
    </Heading>
    <Heading>
      <h2>{text("Title 2", "Titulo 2")}</h2>
    </Heading>
    <Heading>
      <h3>{text("Title 3", "Titulo 3")}</h3>
    </Heading>
    <Heading>
      <h4>{text("Title 4", "Titulo 4")}</h4>
    </Heading>
    <Heading>
      <h5>{text("Title 5", "Titulo 5")}</h5>
    </Heading>
    <Heading>
      <h6>{text("Title 6", "Titulo 6")}</h6>
    </Heading>
  </div>
);
