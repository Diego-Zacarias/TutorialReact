import React from "react";
import styled from "styled-components";
import { actions } from "@storybook/addon-actions";

import Button from "./Button";

export default {
  title: "components/atoms/Button",
  component: Button,
};

const events = actions({ onClick: "clicked" });

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

export const usage = () => (
  <div>
    <p>Enable:</p>
    <Toolbar>
      <Button {...events}>Default</Button>
      <Button color="primary" {...events}>
        Primary
      </Button>
      <Button color="danger" {...events}>
        Danger
      </Button>
    </Toolbar>
    <p>Disable:</p>
    <Toolbar>
      <Button disabled {...events}>
        Default
      </Button>
      <Button disabled color="primary" {...events}>
        Primary
      </Button>
      <Button disabled color="danger" {...events}>
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const outlined = () => (
  <div>
    <p>Enable:</p>
    <Toolbar>
      <Button variants="outlined" {...events}>
        Default
      </Button>
      <Button variants="outlined" color="primary" {...events}>
        Primary
      </Button>
      <Button variants="outlined" color="danger" {...events}>
        Danger
      </Button>
    </Toolbar>
    <p>Disable:</p>
    <Toolbar>
      <Button variants="outlined" disabled {...events}>
        Default
      </Button>
      <Button variants="outlined" disabled color="primary" {...events}>
        Primary
      </Button>
      <Button variants="outlined" disabled color="danger" {...events}>
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const link = () => (
  <div>
    <p>Enable:</p>
    <Toolbar>
      <Button variants="link" {...events}>
        Default
      </Button>
      <Button variants="link" color="primary" {...events}>
        Primary
      </Button>
      <Button variants="link" color="danger" {...events}>
        Danger
      </Button>
    </Toolbar>
    <p>Disable:</p>
    <Toolbar>
      <Button variants="link" disabled {...events}>
        Default
      </Button>
      <Button variants="link" disabled color="primary" {...events}>
        Primary
      </Button>
      <Button variants="link" disabled color="danger" {...events}>
        Danger
      </Button>
    </Toolbar>
  </div>
);
