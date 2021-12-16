import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const ButtonColors = {
  default: "default",
  primary: "primary",
  danger: "danger",
};

export const ButtonVariants = {
  default: "default",
  outlined: "outlined",
  link: "link",
};

const colorMain = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.main;
    case ButtonColors.danger:
      return theme.colors.danger.main;
    default:
      return "#909090";
  }
};
const darkColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.dark;
    case ButtonColors.danger:
      return theme.colors.danger.dark;
    default:
      return "#5a6268";
  }
};

const colorText = (props) => props.theme.colors.primary.text;

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${colorMain};
  border: 2px solid ${colorMain};
  color: ${colorText};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: ${darkColor};
    border-color: ${darkColor};
  }
`;

const ButtonOutlined = styled(Button)`
  background-color: transparent;
  color: ${colorMain};

  &:hover:enabled {
    background-color: transparent;
    color: ${darkColor};
  }
`;

const ButtonLink = styled(Button)`
  background-color: transparent;
  border-color: transparent;
  color: ${colorMain};
  padding-left: 0;
  padding-right: 0;

  &:hover:enabled {
    background-color: transparent;
    border-color: transparent;
    color: ${darkColor};
  }
`;

const ButtonWrapper = (props) => {
  switch (props.variants) {
    case ButtonVariants.outlined:
      return <ButtonOutlined {...props} />;
    case ButtonVariants.link:
      return <ButtonLink {...props} />;
    default:
      return <Button {...props} />;
  }
};

ButtonWrapper.defaultProps = {
  type: "buton",
  children: undefined,
  color: "default",
  variants: "default",
};

ButtonWrapper.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(ButtonColors)),
  variants: PropTypes.oneOf(Object.values(ButtonVariants)),
};

export default ButtonWrapper;
