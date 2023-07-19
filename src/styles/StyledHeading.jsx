import { styled, css } from "styled-components";

const StyledHeading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3.2rem;
      font-weight: 300;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.4rem;
      font-weight: 300;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2.4rem;
      font-weight: 500;
    `}
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.8rem;
      font-weight: 500;
    `}
  line-height: normal;
`;

export default StyledHeading;
