import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { BreakpointSize, breakAt } from "../styles/Breakpoints";

const colorPrimary = "#12f3da";

const Root = styled.div`
  color: #fff;
  padding: 100px 0;

  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.6);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointSize.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakpointSize.lg)} {
    max-width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300px;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    &::before {
      content: "\\2713\\0020";
      color: ${(props) => props.theme.colors.primary.main};
    }
  }
`;

const Hero = ({ image, children }) => (
  <Root image={image} data-testid="hero">
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
