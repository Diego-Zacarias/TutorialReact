import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Section from "components/molecules/Section";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 400px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const TitleStyled = styled.h1`
  margin: 0;
`;

const Error = ({ image, title, description }) => {
  return (
    <Section>
      <Grid sm={2}>
        <div>
          <Heading>
            <TitleStyled>{title}</TitleStyled>
          </Heading>
          <p>{description}</p>
          <Button as={Link} to="/" color="primary">
            Ir para página inicial
          </Button>
        </div>
        <div>
          <ImageContainer>{image}</ImageContainer>
        </div>
      </Grid>
    </Section>
  );
};

Error.defaultProps = {
  image: undefined,
  titulo: "",
  description: "",
};

Error.propTypes = {
  image: PropTypes.node,
  titulo: PropTypes.string,
  description: PropTypes.string,
};

export default Error;
