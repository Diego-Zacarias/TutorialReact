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

const ButtonWrapper = ({ props }) => (
  <div>
    <p>Enable:</p>
    <Toolbar>
      <Button {...props} {...events}>
        Default
      </Button>
      <Button color="primary" {...props} {...events}>
        Primary
      </Button>
      <Button color="danger" {...props} {...events}>
        Danger
      </Button>
    </Toolbar>
    <p>As a Link:</p>
    <Toolbar>
      <Button as="a" href="#" {...props} {...events}>
        Default
      </Button>
      <Button color="primary" as="a" href="#" {...props} {...events}>
        Primary
      </Button>
      <Button color="danger" as="a" href="#" {...props} {...events}>
        Danger
      </Button>
    </Toolbar>
    <p>Disable:</p>
    <Toolbar>
      <Button disabled {...props} {...events}>
        Default
      </Button>
      <Button disabled color="primary" {...props} {...events}>
        Primary
      </Button>
      <Button disabled color="danger" {...props} {...events}>
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const usage = () => <ButtonWrapper />;

export const outlined = () => <ButtonWrapper variant="outlined" />;

export const link = () => <ButtonWrapper variant="link" />;
