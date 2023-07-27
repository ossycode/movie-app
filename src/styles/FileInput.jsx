import { styled } from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  margin-top: 2rem;
  font-size: 1.4rem;
  border-radius: 0.8rem;

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: 0.8rem;
    border: none;
    border-bottom: 1px solid var(--color-greyish-blue);
    color: var(--color-white);
    background-color: transparent;
    cursor: pointer;
    /* transition: color 0.2s, background-color 0.2s; */

    &:hover {
      background-color: var(--color-darkBlue);
    }
  }
`;

export default FileInput;
