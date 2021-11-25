import styled from "styled-components";

const colorPrimary = "#12f3da";

const Heading = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    margin-bottom: 25px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    &::after {
      content: "";
      position: absolute;
      background: ${colorPrimary};
      left: 0;
      bottom: -3px;
      height: 5px;
      width: 70px;
    }
  }
  h1 {
    padding-bottom: 25px;
  }
`;

export default Heading;
