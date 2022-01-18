import React from "react";

import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
  title: "components/Atoms/Accordion",
  component: Accordion,
};

export const usage = () => {
  return (
    <>
      <Accordion title="Título do accordion">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam
        perferendis beatae maxime sunt expedita commodi deleniti enim nesciunt
        est totam aliquam illo ducimus amet nam consequuntur, nemo dignissimos.
        Dolorem.
      </Accordion>
      <Accordion title="Título do accordion">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam
        perferendis beatae maxime sunt expedita commodi deleniti enim nesciunt
        est totam aliquam illo ducimus amet nam consequuntur, nemo dignissimos.
        Dolorem.
      </Accordion>
      <Accordion title="Título do accordion">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam
        perferendis beatae maxime sunt expedita commodi deleniti enim nesciunt
        est totam aliquam illo ducimus amet nam consequuntur, nemo dignissimos.
        Dolorem.
      </Accordion>
    </>
  );
};

export const withGroup = () => {
  return (
    <AccordionGroup>
      <Accordion title="Título do accordion">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam
        perferendis beatae maxime sunt expedita commodi deleniti enim nesciunt
        est totam aliquam illo ducimus amet nam consequuntur, nemo dignissimos.
        Dolorem.
      </Accordion>
      <Accordion title="Título do accordion">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam
        perferendis beatae maxime sunt expedita commodi deleniti enim nesciunt
        est totam aliquam illo ducimus amet nam consequuntur, nemo dignissimos.
        Dolorem.
      </Accordion>
      <Accordion title="Título do accordion">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam
        perferendis beatae maxime sunt expedita commodi deleniti enim nesciunt
        est totam aliquam illo ducimus amet nam consequuntur, nemo dignissimos.
        Dolorem.
      </Accordion>
    </AccordionGroup>
  );
};
