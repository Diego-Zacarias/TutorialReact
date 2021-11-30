import React from "react";

import Hero from "./Hero";
import bg_image from "../stories/assets/bg_time.jpg";
import Heading from "./Heading";
import Button from "./Button";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={bg_image}>
    <Heading>
      <h1>
        Schedule <br />
        <strong>App</strong>
      </h1>
    </Heading>
    <ul>
      <li>Acompnhe seus agendamentos</li>
      <li>Gerencie seus horários</li>
      <li>Melhore o seu serviço</li>
    </ul>
    <br />
    <Button variants="outlined" color="primary">
      Start now
    </Button>
  </Hero>
);
