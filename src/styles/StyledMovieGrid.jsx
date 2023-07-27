import { styled } from "styled-components";

const StyledMovieGrid = styled.div`
  width: 100%;
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(16.4rem, 28rem)); */
  grid-template-columns: repeat(auto-fill, minmax(16.4rem, 28rem));
  gap: 3.2rem 4rem;
  margin-top: 3.2rem;
  place-items: center;
  /* place-content: center; */

  @media only screen and (max-width: 75em) {
    /* grid-template-columns: repeat(auto-fill, minmax(27rem, 1fr)); */
    gap: 2.4rem 2rem;
    place-content: center;
  }

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
    gap: 2.4rem 2.9rem;
  }
  @media only screen and (max-width: 37.5em) {
    grid-template-columns: repeat(auto-fit, minmax(16.4rem, 1fr));
    gap: 2.4rem 1.5rem;
  }
`;

export default StyledMovieGrid;
