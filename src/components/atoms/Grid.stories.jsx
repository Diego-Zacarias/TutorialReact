import React from "react";
import styled from "styled-components";

import Grid from "./Grid";

export default {
  title: "Components/Atoms/Grid",
  component: Grid,
};

const Box = styled.div`
  height: 200px;
  background-color: indigo;
`;

export const usage = () => (
  <Grid sm={1} md={2} lg={3} xl={4}>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
  </Grid>
);
