import React from "react";

import Card, {
  CardBody,
  CardMedia,
  CardMediaDescription,
} from "components/atoms/Card";
import Section from "components/molecules/Section";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import im_cover from "assets/bg_time.jpg";

export default {
  title: "Components/Atoms/Card",
  component: Card,
  subcomponents: { CardBody, CardMedia },
};

export const usage = () => (
  <Section inverse>
    <Card>
      <CardMedia image={im_cover} />
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          molestiae veritatis iste. Suscipit nesciunt, commodi itaque earum,
          repellat magnam minus mollitia illo alias quas illum ullam fuga
          exercitationem, aperiam reiciendis.
        </p>
        <div>
          <Button color="primary" variants="link">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const justImage = () => (
  <Card>
    <CardMedia image={im_cover}>
      <CardMediaDescription>Descricao da imagem</CardMediaDescription>
    </CardMedia>
  </Card>
);
