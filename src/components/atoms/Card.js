import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//#region CardBody

const StyleBody = styled.div`
  padding: 16px;

  h6 {
    margin-top: 0;
  }
`;

export const CardBody = ({ children }) => <StyleBody>{children}</StyleBody>;

CardBody.defaultProps = {
  children: undefined,
};

CardBody.propTypes = {
  children: PropTypes.node,
};

//#endregion

//#region CardMedia

const StyleMedia = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  height: 270px;
`;

export const CardMedia = ({ image }) => <StyleMedia image={image} />;

const Root = styled.div`
  background: #fff;
  border-radius: 4px;
`;

CardMedia.defaultProps = {
  children: undefined,
};

CardMedia.propTypes = {
  children: PropTypes.string,
};

//#endregion

//#region Card

const Card = ({ children }) => <Root>{children}</Root>;

Card.defaultProps = {
  children: undefined,
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;

//#endregion
