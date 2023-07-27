import { styled, css } from "styled-components";

const StyledInput = styled.input`
  ${(props) =>
    props.in === "search" &&
    css`
      border: none;
      padding: 1.5rem 1.5rem 1.5rem 0.2rem;
      font-size: 2.4rem;
      border-bottom: 1px solid transparent;
      min-width: 90%;
      background-color: var(--color-darkBlue);

      &:active,
      &:focus {
        border-color: var(--color-greyish-blue);
      }
    `}
  ${(props) =>
    props.in === "text" &&
    css`
      padding: 1.5rem 10rem 1.5rem 1.5rem;
      font-size: 1.5rem;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid var(--color-greyish-blue);
      &:active,
      &:focus {
        border-color: var(--color-white);
      }
    `}

    ${(props) =>
    props.in === "error" &&
    css`
     
      padding: 1.5rem 10rem 1.5rem 1.5rem;
      font-size: 1.5rem;
      outline: none;
      border: none;
      border-bottom: 1px solid var(--color-red-50);
      background-color: transparent;
      }
      &:active,
      &:focus {
        border-color: var(--color-red-50);
      }
    `}

  outline: none;
  caret-color: var(--color-red-50);

  &::placeholder {
    color: var(--color-white);
    opacity: 0.4978797435760498;
  }
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }

  &:disabled {
    opacity: 0.4978797435760498;
    cursor: not-allowed;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 1.6rem;
  }
`;

export default StyledInput;
