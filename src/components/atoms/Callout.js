import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { breakAt, BreakpointSize } from "styles/Breakpoints";

const StyledCalloutMedia = styled.div`
  width: 30%;
  display: none;

  ${breakAt(BreakpointSize.md)} {
    display: flex;
  }

  svg {
    color: ${(props) => props.theme.colors.primary.main};
    height: 100%;
    max-height: 200px;
    width: 100%;
  }
`;

export const CalloutMedia = ({ children }) => {
  return <StyledCalloutMedia>{children}</StyledCalloutMedia>;
};

CalloutMedia.defaultProps = {
  children: undefined,
};

CalloutMedia.propTypes = {
  children: PropTypes.node,
};

//

const StyledCalloutActions = styled.div`
  padding-top: 8px;
`;

export const CalloutActions = ({ children }) => {
  return <StyledCalloutActions>{children}</StyledCalloutActions>;
};

CalloutActions.defaultProps = {
  children: undefined,
};

CalloutActions.propTypes = {
  children: PropTypes.node,
};

//

const StyledCalloutBody = styled.div`
  flex: 1;
  h6,
  p {
    margin: 0 0 8px;
  }
`;

export const CalloutBody = ({ children }) => {
  return <StyledCalloutBody>{children}</StyledCalloutBody>;
};

CalloutBody.defaultProps = {
  children: undefined,
};

CalloutBody.propTypes = {
  children: PropTypes.node,
};

//

const StyledCallout = styled.div`
  display: flex;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-left: 3px solid ${(props) => props.theme.colors.primary.main};
  border-radius: 4px;
  padding: 16px;
`;

const Callout = ({ children }) => {
  return <StyledCallout>{children}</StyledCallout>;
};

Callout.defaultProps = {
  children: undefined,
};

Callout.propTypes = {
  children: PropTypes.node,
};

export default Callout;
