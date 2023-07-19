import { styled } from "styled-components";

const StyledButton = styled.button`
  background-color: var(--color-red-50);
  color: var(--color-white);
  text-align: center;
  padding: 1.2rem 7rem;
  transition: all 0.2s;
  border-radius: 8px;
  border: none;

  &:hover {
    background-color: var(--color-white);
    color: var(--color-darkBlue);
    /* border: transparent; */
  }
`;

export default StyledButton;
