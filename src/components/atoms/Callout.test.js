import React from "react";
import { render, screen } from "test-utils";
import Callout, { CalloutActions, CalloutBody, CalloutMedia } from "./Callout";

const calloutTest = "Texto de Teste";
const components = {
  callout: (
    <Callout>
      <p>{calloutTest}</p>
    </Callout>
  ),
  actions: (
    <CalloutActions>
      <p>{calloutTest}</p>
    </CalloutActions>
  ),
  body: (
    <CalloutBody>
      <p>{calloutTest}</p>
    </CalloutBody>
  ),
  media: (
    <CalloutMedia>
      <p>{calloutTest}</p>
    </CalloutMedia>
  ),
};

test(`should render with ${calloutTest}`, () => {
  render(components.callout);
  expect(screen.getByText(calloutTest)).toBeInTheDocument();
});

test(`should render with ${calloutTest}`, () => {
  render(components.body);
  expect(screen.getByText(calloutTest)).toBeInTheDocument();
});
test(`should render with ${calloutTest}`, () => {
  render(components.actions);
  expect(screen.getByText(calloutTest)).toBeInTheDocument();
});
test(`should render with ${calloutTest}`, () => {
  render(components.media);
  expect(screen.getByText(calloutTest)).toBeInTheDocument();
});
