import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import bg_image from "../stories/assets/bg_time.jpg";
import Heading from "./Heading";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={bg_image}>
    <Heading>
      <h1>{text("title", "Um título")}</h1>
    </Heading>
    {text("text", "Um texto Qulquer")}
    <br />
    <br />
    <button>Start now</button>
  </Hero>
);
