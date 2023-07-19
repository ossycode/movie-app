import { styled, css } from "styled-components";

const StyledInput = styled.input`
  ${(props) =>
    props.type === "search" &&
    css`
      border: none;
      padding: 1.5rem 1.5rem 1.5rem 0.2rem;
      font-size: 2.4rem;
      border-bottom: 1px solid transparent;
      min-width: 90%;

      &:active,
      &:focus {
        border-color: var(--color-greyish-blue);
      }

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
    `}
  ${(props) =>
    props.type === "text" &&
    css`
      padding: 1.5rem 10rem 1.5rem 1rem;
      font-size: 1.5rem;
      border: none;
      border-bottom: 1px solid var(--color-greyish-blue);
      &:active,
      &:focus {
        border-color: var(--color-white);
      }
    `}


  background-color: var(--color-darkBlue);
  outline: none;
  caret-color: var(--color-red-50);
`;

export default StyledInput;
