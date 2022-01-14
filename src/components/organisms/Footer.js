import React from "react";
import styled from "styled-components";
import {
  FaPhone,
  FaBuilding,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import Container from "components/atoms/Container";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 20px;
  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;

const Footer = () => {
  return (
    <Root>
      <Container>
        <Grid md={3}>
          <div>
            <Heading>
              <h6>Schedule App</h6>
            </Heading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus ullam repellat vero, quae dolore molestias voluptates
              perspiciatis vel, dolor provident architecto distinctio sequi.
              Enim quas officia assumenda ratione iste molestias.
            </p>
          </div>
          <div>
            <Heading>
              <h6>Contatos</h6>
            </Heading>
            <p>
              <IconContainer>
                <FaPhone />
              </IconContainer>
              (84) 99832-2646
            </p>
            <p>
              <IconContainer>
                <FaBuilding />
              </IconContainer>
              Maceió/AL
            </p>
          </div>
          <div>
            <Heading>
              <h6>Redes Sociais</h6>
            </Heading>
            <p>
              <FooterLink target="_blank" href="">
                <IconContainer>
                  <FaFacebookF />
                </IconContainer>
                Facebook
              </FooterLink>
            </p>
            <p>
              <FooterLink target="_blank" href="">
                <IconContainer>
                  <FaLinkedin />
                </IconContainer>
                LinkedIn
              </FooterLink>
            </p>
            <p>
              <FooterLink target="_blank" href="">
                <IconContainer target="_blank" href="">
                  <FaTwitter />
                </IconContainer>
                Twitter
              </FooterLink>
            </p>
          </div>
        </Grid>
      </Container>
    </Root>
  );
};

export default Footer;
