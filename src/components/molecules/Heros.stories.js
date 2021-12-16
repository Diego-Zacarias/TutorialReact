import React from "react";

import Hero from "./Hero";
import bg_image from "../../assets/bg_time.jpg";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";

export default {
  title: "Components/molecules/Hero",
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
