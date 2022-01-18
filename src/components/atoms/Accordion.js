import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const Root = styled.div`
  border: 1px solid #e0e0e0;
  border-left: 5px solid ${(props) => props.theme.colors.primary.main};
  background-color: #fff;

  ${(props) =>
    props.open &&
    css`
      margin: 16px 0;
    `}
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  & h6 {
    margin: 0;
    flex: 1;
  }
  & svg {
    font-size: 1.25rem;
  }
`;
const Body = styled.div`
  padding: 0 16px 16px 16px;
`;

const Accorion = ({ title, children, open: popen, onChange }) => {
  const [sOpen, setOpen] = useState(false);

  const isControlled = popen !== undefined;
  const open = isControlled ? popen : sOpen;

  const handleClick = () => {
    if (!isControlled) {
      setOpen(!open);
    }
    onChange(!open);
  };
  return (
    <Root open={open}>
      <Head role="button" onClick={handleClick}>
        <h6>{title}</h6>
        {open ? <MdExpandMore /> : <MdExpandLess />}
      </Head>
      {open && <Body>{children}</Body>}
    </Root>
  );
};

Accorion.defaultProps = {
  title: undefined,
  children: undefined,
  open: undefined,
  onChange: undefined,
};
Accorion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  open: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Accorion;
