import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { breakAt, BreakpointSize } from "styles/Breakpoints";

const Root = styled.div`
  text-align: center;
  & h5 {
    margin: 16px 0;
    min-height: 3.12rem;
    ${breakAt(BreakpointSize.lg)} {
      min-height: 3.9rem; 
    }
  }
  & p {
    margin: 0;
  }
`;
const getPrimaryColor = (props) => props.theme.colors.primary.main;

const IconRoot = styled.div`
  display: inline-block;
  width: 116px;
  height: 116px;
  padding: 8px;
  border-radius: 50%;

  &:hover {
    border: 1px solid ${getPrimaryColor};

    > * {
      color: #fff;
      background-color: ${getPrimaryColor};
    }
  }
`;

const IconContainer = styled.div`
  border: 1px solid ${getPrimaryColor};
  border-radius: 50%;
  font-size: 32px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${getPrimaryColor};
`;

const Feature = ({ icon, children, title }) => {
  return (
    <Root>
      <IconRoot>
        <IconContainer>{icon}</IconContainer>
      </IconRoot>

      <h5>{title}</h5>
      <div>{children}</div>
    </Root>
  );
};

Feature.defaultProps = {
  icon: undefined,
  title: "Title",
  children: undefined,
};

Feature.PropType = {
  icon: PropTypes.node,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Feature;
