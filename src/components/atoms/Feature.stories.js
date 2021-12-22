import React from "react";
import { FaCar } from "react-icons/fa";

import Feature from "./Feature";

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
  <div>
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
  </div>
);
