import React from "react";
import { FaCar } from "react-icons/fa";

import Feature from "./Feature";
import Grid from "./Grid";

export default {
  title: "Components/Atoms/Feature",
  component: Feature,
};

export const usage = () => (
  <Feature title="titulo" icon={<FaCar />}>
    <p>
      Id ea exercitation fugiat ex sunt laboris ea ut quis tempor eu fugiat
      nisi.
    </p>
  </Feature>
);

export const withGrid = () => (
  <Grid sm={2} md={3} lg={4} xl={5}>
    <Feature title="titulo" icon={<FaCar />}>
      <p>
        Id ea exercitation fugiat ex sunt laboris ea ut quis tempor eu fugiat
        nisi.
      </p>
    </Feature>
    <Feature title="titulo" icon={<FaCar />}>
      <p>
        Id ea exercitation fugiat ex sunt laboris ea ut quis tempor eu fugiat
        nisi.
      </p>
    </Feature>
    <Feature title="titulo" icon={<FaCar />}>
      <p>
        Id ea exercitation fugiat ex sunt laboris ea ut quis tempor eu fugiat
        nisi.
      </p>
    </Feature>
    <Feature title="titulo" icon={<FaCar />}>
      <p>
        Id ea exercitation fugiat ex sunt laboris ea ut quis tempor eu fugiat
        nisi.
      </p>
    </Feature>
  </Grid>
);
