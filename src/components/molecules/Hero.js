import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import Container from "components/atoms/Container";

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

const Content = styled.div`
  display: inline-block;
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
      color: ${(props) => props.theme.colors.primary.main};
      content: "\\2713\\0020";
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
