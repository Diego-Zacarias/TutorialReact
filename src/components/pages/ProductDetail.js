import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";

import { useScrollToTop } from "hooks/scroll";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import BreadCrumb from "components/atoms/BreadCrumb";
import Section from "components/molecules/Section";
import Callout, {
  CalloutBody,
  CalloutActions,
  CalloutMedia,
} from "components/atoms/Callout";
import Button from "components/atoms/Button";
import Footer from "components/organisms/Footer";

import HeroImage from "assets/bg_time.jpg";
import DatePicker from "draws/DatePicker";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;
  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const items = [
  { label: "Home", link: "/" },
  { label: "Serviços" },
  { label: "Nome do Serviço" },
];

const ProductDetail = () => {
  useScrollToTop();

  return (
    <>
      <Hero image={HeroImage}>
        <Heading>
          <h1>Nome do Servicos</h1>
        </Heading>
        <BreadCrumb items={items} />
      </Hero>
      <Section>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          quaerat dolor fuga saepe ullam blanditiis et soluta id beatae
          provident atque voluptatum repudiandae asperiores quo temporibus,
          deleniti vitae rerum vel?
        </p>
        <p>
          Tempora ipsa atque dicta repellat, accusantium maiores! Consequatur
          commodi veniam dolore accusantium dolorem, blanditiis illo hic id nemo
          animi quos sit voluptas corrupti fugit, eius numquam perspiciatis qui
          ipsum ducimus.
        </p>
        <p>
          Asperiores rerum reiciendis voluptas animi, iste dolor fugit dolorum
          vero qui. Qui, sed id inventore rem nihil asperiores quisquam rerum
          architecto dolorem quis pariatur corrupti molestiae quas quos aliquam
          impedit!
        </p>
        <h5>Documentos Necessarios:</h5>
        <PinnedList>
          <PinnedItem>
            <FaIdCard />
            RG
          </PinnedItem>
          <PinnedItem>
            <FaIdCard />
            CPF
          </PinnedItem>
          <PinnedItem>
            <FaHome />
            Comprovante de residencia
          </PinnedItem>
          <PinnedItem>
            <FaScroll />
            Titulo de eleitor
          </PinnedItem>
        </PinnedList>
      </Section>
      <Section inverse>
        <Callout>
          <CalloutBody>
            <h6>Test 1</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque,
              nisi necessitatibus odio sed nostrum odit vitae asperiores fuga id
              amet ratione veritatis non deleniti, doloribus, minus ullam!
              Adipisci, fuga alias?
            </p>
            <CalloutActions>
              <Button color="primary">Baixar Agora</Button>
            </CalloutActions>
          </CalloutBody>
          <CalloutMedia>
            <DatePicker />
          </CalloutMedia>
        </Callout>
      </Section>
      <Footer />
    </>
  );
};

export default ProductDetail;
