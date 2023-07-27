import { styled, css } from "styled-components";

const StyledButton = styled.button`
  background-color: var(--color-red-50);
  color: var(--color-white);
  text-align: center;
  padding: 1.5rem 6.5rem;
  transition: all 0.2s;
  border-radius: 8px;
  border: none;
  margin-top: 2.5rem;

  &:hover {
    background-color: var(--color-white);
    color: var(--color-darkBlue);
    /* border: transparent; */
  }

  @media only screen and (max-width: 52.25em) {
    padding: 1.5rem 4rem;
  }

  ${(props) =>
    props.in === "login" &&
    css`
      margin-top: 2.5rem;
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      padding: 1.2rem 2.5rem;

      @media only screen and (max-width: 52.25em) {
        padding: 1rem 2rem;
      }
    `}

    ${(props) =>
    props.variation === "danger" &&
    css`
      background-color: var(--color-white);
      color: var(--color-darkBlue);

      &:hover {
        background-color: var(--color-red-50);
        color: var(--color-white);
      }
    `}
`;

export default StyledButton;
