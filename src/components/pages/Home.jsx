import React from "react";
import { FaCar } from "react-icons/fa";
// import PropTypes from "prop-types";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import bg_image from "../../assets/bg_time.jpg";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";

const Home = () => {
  return (
    <>
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
      <Section>
        <Grid sm={2} md={3} lg={4} xl={5}>
          <Feature title="titulo" icon={<FaCar />}>
            <p>
              Id ea exercitation fugiat ex sunt laboris ea ut quis tempor eu
              fugiat nisi.
            </p>
          </Feature>
          <Feature title="titulo" icon={<FaCar />}>
            <p>
              Id ea exercitation fugiat ex sunt laboris ea ut quis tempor eu
              fugiat nisi.
            </p>
          </Feature>
          <Feature title="titulo" icon={<FaCar />}>
            <p>
              Id ea exercitation fugiat ex sunt laboris ea ut quis tempor eu
              fugiat nisi.
            </p>
          </Feature>
          <Feature title="titulo" icon={<FaCar />}>
            <p>
              Id ea exercitation fugiat ex sunt laboris ea ut quis tempor eu
              fugiat nisi.
            </p>
          </Feature>
        </Grid>
      </Section>
    </>
  );
};

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
