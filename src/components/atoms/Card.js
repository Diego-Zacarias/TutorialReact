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
  display: flex;
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  height: 270px;
`;

export const CardMedia = ({ image, children }) => (
  <StyleMedia image={image}>{children}</StyleMedia>
);

CardMedia.defaultProps = {
  image: undefined,
  children: undefined,
};

CardMedia.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
};

//#endregion

//#region CardMediaDescription

const StyleMediaDescription = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 8px 16px;
  color: #fff;
  align-self: flex-end;
  flex: 1;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;

export const CardMediaDescription = ({ children }) => (
  <StyleMediaDescription>
    <h5>{children}</h5>
  </StyleMediaDescription>
);

CardMediaDescription.defaultProps = {
  children: undefined,
};

CardMediaDescription.propTypes = {
  children: PropTypes.node,
};

//#endregion

//#region Card

const Root = styled.div`
  background: #fff;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  overflow: hidden;
`;

const Card = ({ children }) => <Root>{children}</Root>;

Card.defaultProps = {
  children: undefined,
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;

//#endregion
