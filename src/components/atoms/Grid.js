import styled from "styled-components";
import PropTypes from "prop-types";

import { breakAt, BreakpointSize } from "styles/Breakpoints";

const Grid = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: repeat(1, 1fr);

  ${breakAt(BreakpointSize.sm)} {
    grid-template-columns: repeat(${(props) => props.sm}, 1fr);
  }
  ${breakAt(BreakpointSize.md)} {
    grid-template-columns: repeat(${(props) => props.md}, 1fr);
  }
  ${breakAt(BreakpointSize.lg)} {
    grid-template-columns: repeat(${(props) => props.lg}, 1fr);
  }
  ${breakAt(BreakpointSize.xl)} {
    grid-template-columns: repeat(${(props) => props.xl}, 1fr);
  }
`;

Grid.defaultProps = {
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
};

Grid.PropTypes = {
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

export default Grid;
