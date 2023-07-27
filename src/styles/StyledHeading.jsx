import { styled, css } from "styled-components";

const StyledHeading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3.2rem;
      font-weight: 300;
      letter-spacing: -0.05rem;

      @media only screen and (max-width: 75em) {
      }

      @media only screen and (max-width: 37.5em) {
        font-size: 2rem;
        letter-spacing: -0.0312rem;
      }
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

      @media only screen and (max-width: 37.5em) {
        font-size: 1.5rem;
      }
    `}
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.8rem;
      font-weight: 500;

      @media only screen and (max-width: 37.5em) {
        font-size: 1.4rem;
      }
    `}
  line-height: normal;
`;

export default StyledHeading;
