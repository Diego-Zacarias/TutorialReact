import React from "react";

import Callout, { CalloutActions, CalloutBody, CalloutMedia } from "./Callout";
import Button from "components/atoms/Button";
import DatePicker from "draws/DatePicker";

export default {
  title: "Components/Atoms/Callout",
  component: Callout,
};

export const usage = () => (
  <Callout>
    <CalloutBody>
      <h6>Test 1</h6>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, nisi
        necessitatibus odio sed nostrum odit vitae asperiores fuga id amet
        ratione veritatis non deleniti, doloribus, minus ullam! Adipisci, fuga
        alias?
      </p>
      <CalloutActions>
        <Button color="primary">Baixar Agora</Button>
      </CalloutActions>
    </CalloutBody>
    <CalloutMedia>
      <DatePicker />
    </CalloutMedia>
  </Callout>
);
