import React from "react";
import { FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import bg_image from "../../assets/bg_time.jpg";
import video from "../../assets/video_schedule.mp4";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import ProductGrid from "components/organisms/ProductGrid";
import AccordionGroup from "components/atoms/AccordionGroup";
import Accordion from "components/atoms/Accordion";

const products = [
  {
    id: 1,
    title: "Title 1",
    summary: "asdfasdfsafd",
    image: bg_image,
  },
  {
    id: 2,
    title: "Title 2",
    summary: "asdfasdfsafd",
    image: bg_image,
  },
  {
    id: 3,
    title: "Title 3",
    summary: "asdfasdfsafd",
    image: bg_image,
  },
  {
    id: 4,
    title: "Title 4",
    summary: "asdfasdfsafd",
    image: bg_image,
  },
  {
    id: 5,
    title: "Title 5",
    summary: "asdfasdfsafd",
    image: bg_image,
  },
  {
    id: 6,
    title: "Title 6",
    summary: "asdfasdfsafd",
    image: bg_image,
  },
];

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
      <Section inverse>
        <Heading>
          <h2>Conheca nossos servicos</h2>
          <ProductGrid products={products} />
        </Heading>
      </Section>
      <Section>
        <Grid md={2}>
          <div>
            <Heading>
              <h2>Schedule App</h2>
            </Heading>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
              voluptates doloribus exercitationem, quis saepe, et cum iste
              pariatur amet atque in sit eveniet consectetur vero molestiae
              tempore libero? Magnam, praesentium!
            </p>
            <div>
              <Button as={Link} to="/sobre" color="primary">
                Saiba mais
              </Button>
            </div>
          </div>
          <div>
            <video src={video} width="100%" autoPlay loop muted />
          </div>
        </Grid>
      </Section>
      <Section inverse>
        <Heading>
          <h2>Duvidas recorrentes</h2>
          <AccordionGroup>
            <Accordion title="Título do accordion">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              aperiam perferendis beatae maxime sunt expedita commodi deleniti
              enim nesciunt est totam aliquam illo ducimus amet nam
              consequuntur, nemo dignissimos. Dolorem.
            </Accordion>
            <Accordion title="Título do accordion">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              aperiam perferendis beatae maxime sunt expedita commodi deleniti
              enim nesciunt est totam aliquam illo ducimus amet nam
              consequuntur, nemo dignissimos. Dolorem.
            </Accordion>
            <Accordion title="Título do accordion">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              aperiam perferendis beatae maxime sunt expedita commodi deleniti
              enim nesciunt est totam aliquam illo ducimus amet nam
              consequuntur, nemo dignissimos. Dolorem.
            </Accordion>
          </AccordionGroup>
        </Heading>
      </Section>
      <Footer />
    </>
  );
};

export default Home;
