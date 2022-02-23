import React from "react";
import styled from "styled-components";

import bg_image from "assets/bg_time.jpg";
import img_avatar from "assets/img_2.jpg";
import AboutImage from "draws/ScheduleSvg1";
import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";
import Card, { CardMedia, CardMediaDescription } from "components/atoms/Card";
import BreadCrumb from "components/atoms/BreadCrumb";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const Team = [
  { id: 1, name: "Saci", avatar: img_avatar },
  { id: 2, name: "Caipora", avatar: img_avatar },
  { id: 3, name: "Mula sem cabeca", avatar: img_avatar },
  { id: 4, name: "Iara", avatar: img_avatar },
  { id: 5, name: "Curupira", avatar: img_avatar },
  { id: 6, name: "Cuca", avatar: img_avatar },
];

const items = [{ label: "Início", link: "/" }, { label: "Sobre" }];

const About = () => {
  return (
    <>
      <Hero image={bg_image}>
        <Heading>
          <h1>ScheduleApp</h1>
        </Heading>
        <BreadCrumb items={items} />
      </Hero>
      <Section>
        <Grid md={2}>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              illum sint quibusdam? Tempore quidem soluta numquam reiciendis
              nesciunt dolor necessitatibus, obcaecati quas laborum, quos, quasi
              tenetur? Facilis sit nesciunt quibusdam.
            </p>
            <p>
              Fuga doloremque id consequatur quibusdam, hic maiores molestiae
              adipisci iste dolores, placeat vel ducimus error reiciendis,
              accusamus deserunt quod libero inventore similique. Aspernatur,
              ducimus architecto labore laborum animi pariatur placeat.
            </p>
            <p>
              Laborum nobis sit minus quisquam impedit, quis aliquam nisi. Quia
              culpa perferendis accusantium minus officia dignissimos ea id
              reprehenderit, nemo nisi exercitationem, illum reiciendis aliquid
              corrupti, libero officiis dolorum est?
            </p>
            <ul>
              <l1>
                Laborum nobis sit minus quisquam impedit, quis aliquam nisi.
              </l1>
              <l1>
                Laborum nobis sit minus quisquam impedit, quis aliquam nisi.
              </l1>
              <l1>
                Laborum nobis sit minus quisquam impedit, quis aliquam nisi.
              </l1>
            </ul>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam, molestiae nostrum aliquam maiores quis assumenda
              expedita? Voluptate necessitatibus obcaecati dicta ut voluptatibus
              soluta alias exercitationem at, voluptatem cupiditate laboriosam
              molestiae?
            </p>
            <center>
              <ImageContainer>
                <AboutImage />
              </ImageContainer>
            </center>
          </div>
        </Grid>
      </Section>
      <Section inverse>
        <Grid md={2}>
          <div>
            <h4>Missão</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
              hic dolorem fuga alias repellat ea. Quo soluta culpa quaerat
              dolorum quas nisi iste officiis facilis incidunt sunt, optio
              cupiditate alias.
            </p>
          </div>
          <div>
            <h4>Visão</h4>
            <p>
              Molestias, quae. Dolor doloremque, iusto adipisci porro
              reprehenderit ratione corrupti nihil nobis asperiores facere
              suscipit exercitationem, eaque, in voluptates nisi. Cum iste ullam
              voluptatem rem velit itaque, temporibus dolores cupiditate!
            </p>
          </div>
        </Grid>
      </Section>
      <Section>
        <Heading>
          <h2>Conheca nosso Time</h2>
        </Heading>
        <Grid sm={2} md={3} lg={4}>
          {Team.map((member) => (
            <Card key={member.id}>
              <CardMedia image={member.avatar}>
                <CardMediaDescription>
                  <h5>{member.name}</h5>
                </CardMediaDescription>
              </CardMedia>
            </Card>
          ))}
        </Grid>
      </Section>
      <Footer />
    </>
  );
};

export default About;
